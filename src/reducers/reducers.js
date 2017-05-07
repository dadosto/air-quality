import {
  UPDATE_CURRENT_DATA,
  UPDATE_SELECTED_LOCATION,
  UPDATE_HISTORY_DATA
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
  },
  historyData: [
    {
      "datetime": "2017-04-20T01:54:36",
      "country_name": "United States",
      "breezometer_aqi": 59,
      "breezometer_color": "#C7E916",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 54,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "Pay attention to signs of respiratory distress in small children",
        "sport": "You want to work out now??!\u2026 Only if you have no plan B",
        "health": "People with health sensitivities should be prepared for minor respiratory difficulties",
        "inside": "You don't have to stay inside, but it's recommended that you keep tracking the air quality",
        "outside": "If you wish to stay outside for a long time, you should try to find a cleaner place nearby"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-21T01:54:24",
      "country_name": "United States",
      "breezometer_aqi": 55,
      "breezometer_color": "#E0F30C",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 64,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "You can go outside with the kids, but monitor their breathing & pay attention to notifications",
        "sport": "You want to work out now??!\u2026 Only if you have no plan B",
        "health": "Exposure to air hazards is dangerous for people with health sensitivities, so it is important to monitor air quality at this time",
        "inside": "There's no need to get worried, but keep tracking air quality in the next few hours",
        "outside": "The air quality outside isn't the best\u2026 try to find a cleaner area"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-22T01:57:20",
      "country_name": "United States",
      "breezometer_aqi": 53,
      "breezometer_color": "#ECF707",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 67,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "You can go outside with the kids, but monitor their breathing & pay attention to notifications",
        "sport": "Our recommendation: search for a cleaner area for a physical outdoor activity",
        "health": "People with health sensitivities should be prepared for minor respiratory difficulties",
        "inside": "You don't have to stay inside, but it's recommended that you keep tracking the air quality",
        "outside": "If you wish to stay outside for a long time, you should try to find a cleaner place nearby"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-23T05:45:08",
      "country_name": "United States",
      "breezometer_aqi": 59,
      "breezometer_color": "#C7E916",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 56,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "You can go outside with the kids, but monitor their breathing & pay attention to notifications",
        "sport": "You should look for an alternative area with better air quality to work out",
        "health": "Exposure to air hazards is dangerous for people with health sensitivities, so it is important to monitor air quality at this time",
        "inside": "There's no need to get worried, but keep tracking air quality in the next few hours",
        "outside": "Try to minimize long stays outdoors & Keep tracking the air quality around your area"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-24T05:52:34",
      "country_name": "United States",
      "breezometer_aqi": 57,
      "breezometer_color": "#D3EE11",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 57,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "Pay attention to the respiratory status of your kid(s)",
        "sport": "Our recommendation: search for a cleaner area for a physical outdoor activity",
        "health": "Exposure to air hazards is dangerous for people with health sensitivities, so it is important to monitor air quality at this time",
        "inside": "We're not going to tell you not to go outside, but you should continue tracking the air quality around you",
        "outside": "Try to minimize long stays outdoors & Keep tracking the air quality around your area"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-25T05:54:10",
      "country_name": "United States",
      "breezometer_aqi": 54,
      "breezometer_color": "#E6F50A",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 66,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "Pay attention to signs of respiratory distress in small children",
        "sport": "Our recommendation: search for a cleaner area for a physical outdoor activity",
        "health": "People with health sensitivities should be prepared for minor respiratory difficulties",
        "inside": "We're not going to tell you not to go outside, but you should continue tracking the air quality around you",
        "outside": "Try to minimize long stays outdoors & Keep tracking the air quality around your area"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-26T05:01:06",
      "country_name": "United States",
      "breezometer_aqi": 60,
      "breezometer_color": "#C1E719",
      "breezometer_description": "Fair air quality",
      "country_aqi": 53,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "You should supervise your children in the coming hours and monitor changes in air quality",
        "sport": "Since we inhale more air during sports, you should keep track of changes in air quality for the next few hours",
        "health": "People with health sensitivities should monitor the air quality in the next few hours",
        "inside": "The amount of pollutants in the air is noticeable, but still there is no danger to health - It is recommended to watch for changes",
        "outside": "It's still OK to go out and enjoy a stroll, just pay attention for changes in air quality"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-27T05:55:48",
      "country_name": "United States",
      "breezometer_aqi": 49,
      "breezometer_color": "#FFF900",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 78,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "You can go outside with the kids, but monitor their breathing & pay attention to notifications",
        "sport": "Our recommendation: search for a cleaner area for a physical outdoor activity",
        "health": "People with health sensitivities should be prepared for minor respiratory difficulties",
        "inside": "There's no need to get worried, but keep tracking air quality in the next few hours",
        "outside": "The air quality outside isn't the best\u2026 try to find a cleaner area"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-28T06:55:16",
      "country_name": "United States",
      "breezometer_aqi": 58,
      "breezometer_color": "#CDEB14",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 65,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "You can go outside with the kids, but monitor their breathing & pay attention to notifications",
        "sport": "Our recommendation: search for a cleaner area for a physical outdoor activity",
        "health": "Exposure to air hazards is dangerous for people with health sensitivities, so it is important to monitor air quality at this time",
        "inside": "You don't have to stay inside, but it's recommended that you keep tracking the air quality",
        "outside": "Try to minimize long stays outdoors & Keep tracking the air quality around your area"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-29T06:55:46",
      "country_name": "United States",
      "breezometer_aqi": 47,
      "breezometer_color": "#FFED00",
      "breezometer_description": "Moderate air quality",
      "country_aqi": 84,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "Pay attention to signs of respiratory distress in small children",
        "sport": "Our recommendation: search for a cleaner area for a physical outdoor activity",
        "health": "There is no real danger for people with health sensitivities. Just keep an eye out for changes in air quality for the next few hours",
        "inside": "There's no need to get worried, but keep tracking air quality in the next few hours",
        "outside": "If you wish to stay outside for a long time, you should try to find a cleaner place nearby"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    },
    {
      "datetime": "2017-04-30T06:54:06",
      "country_name": "United States",
      "breezometer_aqi": 63,
      "breezometer_color": "#AFDF21",
      "breezometer_description": "Fair air quality",
      "country_aqi": 65,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "No reason to panic, but pay attention to changes in air quality and any signals of breathing problems in your children",
        "sport": "You can go on a run - just keep your nose open for any changes!",
        "health": "There is no real danger for people with health sensitivities. Just keep an eye out for changes in air quality for the next few hours",
        "inside": "The amount of pollutants in the air is noticeable, but still there is no danger to your health - It is recommended to continue monitoring changes in the coming hours",
        "outside": "It's still OK to go out and enjoy a stroll, just pay attention for changes in air quality"
      },
      "dominant_pollutant_canonical_name": "pm10",
      "dominant_pollutant_description": "Inhalable particulate matter (<10\u00b5m)",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is inhalable particulate matter (PM10).",
        "effects": "Particles enter the lungs and cause local and systemic inflammation in the respiratory system & heart, thus cause cardiovascular and respiratory diseases such as asthma and bronchitis.",
        "causes": "Main sources are natural dust, smoke and pollen."
      }
    },
    {
      "datetime": "2017-05-01T06:56:15",
      "country_name": "United States",
      "breezometer_aqi": 62,
      "breezometer_color": "#B5E21E",
      "breezometer_description": "Fair air quality",
      "country_aqi": 59,
      "country_aqi_prefix": "",
      "country_color": "#FFFF00",
      "country_description": "Moderate air quality",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "You should supervise your children in the coming hours and monitor changes in air quality",
        "sport": "You can go on a run - just keep your nose open for any changes!",
        "health": "People with health sensitivities should monitor the air quality in the next few hours",
        "inside": "The air quality is still good - we'll keep you updated if things get worse",
        "outside": "You can go out, but please pay attention for changes in air quality"
      },
      "dominant_pollutant_canonical_name": "no2",
      "dominant_pollutant_description": "Nitrogen dioxide",
      "dominant_pollutant_text": {
        "main": "The dominant pollutant is nitrogen dioxide (NO\u2082).",
        "effects": "Exposure may cause increased bronchial reactivity in patients with asthma, lung function decline in patients with COPD and increased risk of respiratory infections, especially in young children",
        "causes": "Main sources are fuel burning processes in industry and transportation."
      }
    }
  ]
};

export default function airQuality(state = initialState, action) {
  console.log('Action = ', action);
  switch (action.type) {
    case UPDATE_CURRENT_DATA:
      return Object.assign({}, state, { data: action.data });
    case UPDATE_HISTORY_DATA:
      return Object.assign({}, state, { historyData: action.historyData });
    case UPDATE_SELECTED_LOCATION:
      return Object.assign({}, state, { location: action.location });
    default:
      return state;
  }
}
