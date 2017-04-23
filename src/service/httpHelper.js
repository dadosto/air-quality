import $ from 'jquery';

const __DEV__ = true;


const CONVERSATION_ID_PARAM = 'conversationId';
const CONVERSATION_ID_HEADER = 'X-Conversation-Id';

const LANG_PARAM = 'lang';
const LANG_HEADER = 'Accept-Language';

/**
 * Default values for timeout on request.
 *
 * response: Timeout if server doesn't respond for X ms.
 * deadline: Timeout if server doesn't finish loading for X ms.
 *
 * @type {{response: number, deadline: number}}
 */
const defaultTimeout = {
  response: 30 * 1000,  // Timeout if server doesn't respond for 30s,
};

let currentConversationId = '';
let currentLang = '';

/**
 * Makes a 'GET' request to the given endpoint.
 * Any params given as a second argument will become part of the URI as query params.
 *
 * @param endpoint the endpoint.
 * @param params the params, optional.
 * @returns {Promise} a Promise which resolves when the response is received. Rejects in case of error.
 */
function get(endpoint, params) {

  const promise = new Promise((resolve, reject) => {

    $.ajax({
      url: endpoint,
      dataType: 'json',
      data: params,
      cache: false,
      success: function(response) {
        resolve(response);
      },
      error: function(xhr, status, err) {
        console.error(endpoint, status, err.toString());
        reject(err);
      }
    });

  });

  if (__DEV__) {
    promise
      .then(() => console.log('GET request succeeded:', endpoint))
      .catch(error => console.log('GET request failed with error:', error, 'endpoint:', endpoint));
  }

  return promise;
}

function getParameter(name) {
  const params = window.location.search.substring(1).split('&');
  for (let i = 0; i < params.length; i++) { // eslint-disable-line no-plusplus
    const param = params[i].split('=');
    if (param[0] === name) {
      return decodeURIComponent(param[1]);
    }
  }
  return null;
}

/**
 * Makes get request to the given endpoint.
 * Any params given as a second argument will become part of the URI as query params.
 *
 * Compared to the .get method, this method actually returns the response body as a JSON object.
 *
 * @param endpoint the endpoint.
 * @param params the params.
 * @param headers an optional list of http headers. Example: [{ name: 'X-Header', value: 'X-Header-Value' }].
 * @returns {Promise} a Promise which when resolved, provides the response body
 * in JSON format to the next '.then' handler into the promise chain.
 */
function getJson(endpoint, params) {
  return get(endpoint, params).then(responseAsJson);
}

function responseAsJson(response) {
  return response;
}

function resolveLang() {
  return new Promise((resolve, reject) => {
    const lang = getParameter(LANG_PARAM);
    if (lang === null) {
      reject();
    }

    currentLang = lang;

    resolve(currentLang);
  });
}

// the public api
export default {
  getJson,
  getParameter,
  resolveLang
};
