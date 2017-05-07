import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GoogleSearch from './GoogleSearch';
import Map from './Map';
import CircularProgressbar from 'react-circular-progressbar';
import * as AirQualityActions from '../actions/actions';

/**
 * Air Quality Meter component.
 */
class AirQualityMeter extends React.Component {

  constructor(props) {
    super(props);
    this.locationChangeHandler = this.locationChangeHandler.bind(this);
  }

  locationChangeHandler(data) {
    const {
      updateLocation,
      fetchData
    } = this.props;

    updateLocation(data.latitude, data.longitude, data.location);

    fetchData('2017-05-06', '2017-05-06', data.latitude, data.longitude);

  }

  render() {

    const {
      latitude,
      longitude,
      airQualityIndex,
      breezometer_description,
      breezometer_color,
      random_recommendations
    } = this.props;

    return (
        <div>
          <GoogleSearch locationChangeHandler={this.locationChangeHandler}/>
          <div className="map-and-quility-index-container">
            <div className="circularProgressbar-wrapper">
              <div className="air-quality-index-title">Air Quality Index</div>
              <CircularProgressbar percentage={airQualityIndex} textForPercentage={(percent) => `${percent} aqi`}/>
              <div className="air-quality-index-footer">{breezometer_description}</div>
            </div>
            <Map latitude={latitude} longitude={longitude}/>
            <div className="clearBoth"/>
            <div className="air-quality-recommendations">
              <div>Recommendations</div>
              <ul>
              {
                Object.keys(random_recommendations).map(function (key) {
                  let recommendation = random_recommendations[key];
                  return (<li key={key}>{key} - {recommendation}</li>);
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
  address: React.PropTypes.string.isRequired,
  latitude: React.PropTypes.number.isRequired,
  longitude: React.PropTypes.number.isRequired,
  airQualityIndex: React.PropTypes.number.isRequired,
  breezometer_description: React.PropTypes.string.isRequired,
  breezometer_color: React.PropTypes.string.isRequired,
  random_recommendations: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    address: state.airQuality.location.address,
    latitude: state.airQuality.location.latitude,
    longitude: state.airQuality.location.longitude,
    airQualityIndex: state.airQuality.data.breezometer_aqi,
    breezometer_description: state.airQuality.data.breezometer_description,
    breezometer_color: state.airQuality.data.breezometer_color,
    random_recommendations: state.airQuality.data.random_recommendations
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
