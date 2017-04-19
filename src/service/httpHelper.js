import request from 'superagent/lib/client';
import preventRequestCaching from 'superagent-no-cache';

const __DEV__ = undefined;


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
 * @param headers an optional list of http headers. Example: [{ name: 'X-Header', value: 'X-Header-Value' }].
 * @param accept the Accept header value, optional.
 * @returns {Promise} a Promise which resolves when the response is received. Rejects in case of error.
 */
function get(endpoint, params, headers, accept = '*/*') {
  const promise = new Promise((resolve, reject) => {
    let getRequest = request
      .get(endpoint)
      .use(preventRequestCaching)
      .timeout(defaultTimeout);

    if (__DEV__) {
      getRequest = getRequest.withCredentials();
    }

    if (headers) {
      headers.forEach((header) => getRequest.set(header.name, header.value));
    }

    getRequest.set(LANG_HEADER, currentLang);

    getRequest
      .query(params)
      .accept(accept)
      .end((error, response) => {
        if (error) {
          reject(error);
        }

        resolve(response);
      });
  });

  if (__DEV__) {
    promise
      .then(() => console.log('GET request succeeded:', endpoint))
      .catch(error => console.log('GET request failed with error:', error, 'endpoint:', endpoint));
  }

  return promise;
}

/**
 * Makes a 'POST' request to the given endpoint.
 *
 * @param endpoint the endpoint.
 * @param data the JSON object payload.
 * @param headers an optional list of http headers. Example: [{ name: 'X-Header', value: 'X-Header-Value' }].
 *
 * @returns {Promise} a Promise which resolves when the response is received. Rejects in case of error.
 */
function post(endpoint, data, headers) {
  const promise = new Promise((resolve, reject) => {
    const postRequest = request
      .post(endpoint)
      .use(preventRequestCaching)
      .timeout(defaultTimeout);

    if (headers) {
      headers.forEach((header) => postRequest.set(header.name, header.value));
    }

    postRequest.set(LANG_HEADER, currentLang);

    postRequest
      .type(request.types.json)
      .send(data)
      .end((error, response) => {
        if (error) {
          reject(error);
        }

        resolve(response);
      });
  });

  if (__DEV__) {
    promise
      .then(() => console.log('POST request succeeded:', endpoint))
      .catch(error => console.log('POST request failed with error:', error, 'endpoint:', endpoint));
  }

  return promise;
}

/**
 * Makes a 'PUT' request to the given endpoint.
 *
 * @param endpoint the endpoint.
 * @param data the JSON object payload.
 * @param params the query string parameters.
 * @param headers an optional list of http headers. Example: [{ name: 'X-Header', value: 'X-Header-Value' }].
 *
 * @returns {Promise} a Promise which resolves when the response is received. Rejects in case of error.
 */
function put(endpoint, data, params, headers) {
  const promise = new Promise((resolve, reject) => {
    const putRequest = request
      .put(endpoint)
      .use(preventRequestCaching);

    if (headers) {
      headers.forEach((header) => putRequest.set(header.name, header.value));
    }

    putRequest.set(LANG_HEADER, currentLang);

    putRequest
      .type(request.types.json)
      .query(params)
      .send(data)
      .end((error, response) => {
        if (error) {
          reject(error);
        }

        resolve(response);
      });
  });

  if (__DEV__) {
    promise
      .then(() => console.log('PUT request succeeded:', endpoint))
      .catch(error => console.log('PUT request failed with error:', error, 'endpoint:', endpoint));
  }

  return promise;
}

/**
 * Makes a 'DELETE' request to the given endpoint.
 * Any params given as a second argument will become part of the URI as query params.
 *
 * @param endpoint the endpoint.
 * @param params the params.
 * @param headers an optional list of http headers. Example: [{ name: 'X-Header', value: 'X-Header-Value' }].
 * @param accept the Accept header value, optional.
 * @returns {Promise} a Promise which resolves when the response is received. Rejects in case of error.
 */
function del(endpoint, params, headers, accept = '*/*') {
  const promise = new Promise((resolve, reject) => {
    let deleteRequest = request
      .delete(endpoint)
      .use(preventRequestCaching);

    if (__DEV__) {
      deleteRequest = deleteRequest.withCredentials();
    }

    if (headers) {
      headers.forEach((header) => deleteRequest.set(header.name, header.value));
    }

    deleteRequest.set(LANG_HEADER, currentLang);

    deleteRequest
      .query(params)
      .accept(accept)
      .end((error, response) => {
        if (error) {
          reject(error);
        }

        resolve(response);
      });
  });

  if (__DEV__) {
    promise
      .then(() => console.log('DELETE request succeeded:', endpoint))
      .catch(error => console.log('DELETE request failed with error:', error, 'endpoint:', endpoint));
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
function getJson(endpoint, params, headers) {
  return get(endpoint, params, headers, request.types.json).then(responseAsJson);
}

/**
 * Makes a 'DELETE' request to the given endpoint.
 *
 * @param endpoint the endpoint.
 * @param params the query string parameters.
 * @param headers an optional list of http headers. Example: [{ name: 'X-Header', value: 'X-Header-Value' }].
 *
 * @returns {Promise} a Promise which when resolved, provides the response body
 * in JSON format to the next '.then' handler into the promise chain.
 */
function deleteJson(endpoint, params, headers) {
  return del(endpoint, params, headers).then(responseAsJson);
}

/**
 * Makes a 'POST' request to the given endpoint.
 *
 * @param endpoint the endpoint.
 * @param data the request body payload.
 * @param headers an optional list of http headers. Example: [{ name: 'X-Header', value: 'X-Header-Value' }].
 *
 * @returns {Promise} a Promise which when resolved, provides the response body
 * in JSON format to the next '.then' handler into the promise chain.
 */
function postJson(endpoint, data, headers) {
  return post(endpoint, data, headers).then(responseAsJson);
}

/**
 * Makes a 'PUT' request to the given endpoint.
 *
 * @param endpoint the endpoint.
 * @param params the query string parameters.
 * @param headers an optional list of http headers. Example: [{ name: 'X-Header', value: 'X-Header-Value' }].
 *
 * @returns {Promise} a Promise which when resolved, provides the response body
 * in JSON format to the next '.then' handler into the promise chain.
 */
function putJson(endpoint, params, headers) {
  return put(endpoint, params, headers).then(responseAsJson);
}

function responseAsJson(response) {
  // return response.body || JSON.parse(response.text);
  return response.body || response.text;
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
  postJson,
  putJson,
  deleteJson,
  getParameter,
  resolveLang
};
