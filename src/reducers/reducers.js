import {
  UPDATE_AIR_QUALITY_DATA_FOR_RANGE,
  UPDATE_SELECTED_LOCATION
} from '../actions/actionTypes';

export const initialState = {
  data: {
    "datetime":"2017-05-06T17:55:15",
    "country_name":"Macedonia",
    "breezometer_aqi":66,
    "breezometer_color":"#9CD828",
    "breezometer_description":"Fair air quality",
    "country_aqi":null,
    "country_aqi_prefix":"",
    "country_color":"#99CC00",
    "country_description":"Low air pollution",
    "data_valid":true,
    "key_valid":true,
    "random_recommendations":{
      "children":"No reason to panic, but pay attention to changes in air quality and any signals of breathing problems in your children",
      "sport":"Since we inhale more air during sports, you should keep track of changes in air quality for the next few hours",
      "health":"Exposure to air hazards is dangerous for people with health sensitivities, so it is important to monitor air quality at this time",
      "inside":"The amount of pollutants in the air is noticeable, but still there is no danger to your health - It is recommended to continue monitoring changes in the coming hours",
      "outside":"It's still OK to go out and enjoy a stroll, just pay attention for changes in air quality"
    },
    "dominant_pollutant_canonical_name":"o3",
    "dominant_pollutant_description":"Ozone",
    "dominant_pollutant_text":{
      "main":"The dominant pollutant is ozone (O₃).",
      "effects":"Ozone can irritate the airways causing coughing, a burning sensation, wheezing and shortness of breath. Children, people with respiratory or lung and heart diseases, elderly and those who exercise outdoors are particularly vulnerable to ozone exposure.",
      "causes":"Ozone is created in a chemical reaction between atmospheric oxygen, nitrogen oxides, organic compounds and sunlight."
    }
  },
  location: {
    address: 'Skopje, Macedonia (FYROM)',
    latitude: 41.9973462,
    longitude: 21.42799560000003
  }
};

export default function airQuality(state = initialState, action) {
  console.log('Action = ', action);
  switch (action.type) {
    case UPDATE_AIR_QUALITY_DATA_FOR_RANGE:
      return Object.assign({}, state, { data: action.data });
    case UPDATE_SELECTED_LOCATION:
      return Object.assign({}, state, { location: action.location });
    default:
      return state;
  }
}
