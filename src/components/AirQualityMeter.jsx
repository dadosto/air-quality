import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GoogleSearch from './GoogleSearch';
import Map from './Map';
import CircularProgressbar from 'react-circular-progressbar';
import * as AirQualityActions from '../actions/actions';
import {getTomorrowsDate, getDateFromTwoWeeksAgo} from '../util/dateUtils';


/**
 * Air Quality Meter component.
 */
class AirQualityMeter extends React.Component {

  constructor(props) {
    super(props);
    this.locationChangeHandler = this.locationChangeHandler.bind(this);
  }

  componentDidMount() {

    const {
      fetchData,
      location
    } = this.props;

    const tomorrowsDate = getTomorrowsDate();
    const pastDate = getDateFromTwoWeeksAgo();


    fetchData(pastDate, tomorrowsDate, location.latitude, location.longitude);
  }

  locationChangeHandler(data) {
    const {
      updateLocation,
      fetchData
    } = this.props;

    const tomorrowsDate = getTomorrowsDate();
    const pastDate = getDateFromTwoWeeksAgo();

    updateLocation(data.latitude, data.longitude, data.location);
    fetchData(pastDate, tomorrowsDate, data.latitude, data.longitude);
  }

  render() {

    const {
      location,
      airQualityIndex,
      breezometer_description,
      breezometer_color,
      random_recommendations,
      dominant_pollutant_canonical_name,
      dominant_pollutant_description,
      dominant_pollutant_text
    } = this.props;

    const qualityColorStyle = {
      backgroundColor: breezometer_color
    };

    return (
        <div className="air-quality-meter-widget">
          <div>Check the air quality for a given location</div>
          <GoogleSearch locationChangeHandler={this.locationChangeHandler}/>
          <div className="map-and-quility-index-container">
            <div className="circularProgressbar-wrapper">
              <div className="air-quality-index-title">Air Quality Index</div>
              <CircularProgressbar
                  percentage={airQualityIndex}
                  textForPercentage={percentage => `${percentage} aqi`}
                  classForPercentage={percentage => percentage > 50 ? 'high' : 'low'}
              />
              <div className="air-quality-index-footer">{breezometer_description}</div>
              <div className="air-quality-color-container">
                <span className="air-quality-color-text">Quality Color</span>
                <span className="air-quality-color" style={qualityColorStyle}/>
              </div>
            </div>
            <Map latitude={location.latitude} longitude={location.longitude}/>
            <div className="clearBoth"/>
            <div className="air-quality-recommendations">
              <div>Air Quality Recommendations in {location.address}</div>
              <ul>
                {
                  Object.keys(random_recommendations).map(function(key) {
                    let recommendation = random_recommendations[key];
                    return (<li key={key}>{key} - {recommendation}</li>);
                  })
                }
              </ul>
            </div>
            <div className="air-quality-dominant-pollutant">
              <div>Dominant pollutant: {dominant_pollutant_canonical_name}</div>
              <div>Dominant description: {dominant_pollutant_description}</div>
              <ul>
                {
                  Object.keys(dominant_pollutant_text).map(function(key) {
                    const pollutantText = dominant_pollutant_text[key];
                    return (<li key={key}>{key} - {pollutantText}</li>);
                  })
                }
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

AirQualityMeter.propTypes = {
  airQualityIndex: React.PropTypes.number.isRequired,
  breezometer_description: React.PropTypes.string.isRequired,
  breezometer_color: React.PropTypes.string.isRequired,
  random_recommendations: React.PropTypes.shape({}),
  dominant_pollutant_canonical_name: React.PropTypes.string,
  dominant_pollutant_description: React.PropTypes.string,
  dominant_pollutant_text: React.PropTypes.shape({}),
  location: React.PropTypes.shape({
    address: React.PropTypes.string.isRequired,
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired
  })
};

const mapStateToProps = (state) => {
  return {
    location: state.airQuality.location,
    airQualityIndex: state.airQuality.data.breezometer_aqi,
    breezometer_description: state.airQuality.data.breezometer_description,
    breezometer_color: state.airQuality.data.breezometer_color,
    random_recommendations: state.airQuality.data.random_recommendations,
    dominant_pollutant_canonical_name: state.airQuality.data.dominant_pollutant_canonical_name,
    dominant_pollutant_description: state.airQuality.data.dominant_pollutant_description,
    dominant_pollutant_text: state.airQuality.data.dominant_pollutant_text
  };
};

const mapDispatchToProps = dispatch => {
  const allActions =
      Object.assign({}, {
        updateLocation: AirQualityActions.updateLocation,
        fetchData: AirQualityActions.getAirQualityDataForDateRangeAndLocation
      });
  return bindActionCreators(allActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AirQualityMeter);
