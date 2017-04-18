import {GET_AIR_QUALITY_DATA_FOR_RANGE} from '../actions/actionTypes';

const initialState = {
  datetime: "2017-01-01T01:00:00",
  country_name: "United States",
  breezometer_aqi: 82,
  breezometer_color: "#4FBB35",
  breezometer_description: "Excellent air quality",
  country_aqi: 22,
  country_aqi_prefix: "",
  country_color: "#00E400",
  country_description: "Good air quality",
  data_valid: true,
  key_valid: true,
  random_recommendations: {
    children: "The air is ideal for outdoor activities with infants and children",
    sport: "This is an excellent opportunity to enjoy your favorite outdoor activity without any worries",
    health: "With this particular air quality, you have no limitations. Enjoy the environment!",
    inside: "Open the windows, let that fresh air come in & go outside!",
    outside: "It's an ideal time to go outside and enjoy the fresh air"
  },
  dominant_pollutant_canonical_name: "pm25",
  dominant_pollutant_description: "Fine particulate matter (<2.5µm)",
  dominant_pollutant_text: {
    main: "The dominant pollutant is fine particulate matter (PM2.5).",
    effects: "Particles enter the lungs and cause local and systemic inflammation in the respiratory system & heart, thus cause cardiovascular and respiratory diseases such as asthma and bronchitis.",
    causes: "Main sources are fuel burning processes in industry, transportation and indoor heating."
  }
};

export default function airQuality(state = {}, action) {
  switch (action.type) {
    case GET_AIR_QUALITY_DATA_FOR_RANGE:
      return action.data;
    default:
      return state;
  }
}
