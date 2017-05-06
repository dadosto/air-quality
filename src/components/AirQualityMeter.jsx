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
      updateLocation
    } = this.props;

    updateLocation(data.latitude, data.longitude, data.location);
  }

  render() {

    const {
      latitude,
      longitude,
      airQualityIndex,
    } = this.props;

    const airQualityDescription = AirQualityMeter.getAirQualityDescription(airQualityIndex);

    return (
        <div>
          <GoogleSearch locationChangeHandler={this.locationChangeHandler} />
          <div className="map-and-quility-index-container">
            <div className="circularProgressbar-wrapper">
              <div className="air-quality-index-title">Air Quality Index</div>
              <CircularProgressbar percentage={airQualityIndex} textForPercentage={(percent) => `${percent} aqi`}/>
              <div className="air-quality-index-footer">{airQualityDescription}</div>
            </div>
            <Map latitude={latitude} longitude={longitude}/>
          </div>
        </div>
    );
  }

  static getAirQualityDescription(aqi) {

    let airQualityDescription = "Quality unknown";

    if (aqi >= 0 && aqi < 20) {
      airQualityDescription = 'Poor Air Quality';
    } else if (aqi >= 20 && aqi < 40) {
      airQualityDescription = 'Low Air Quality';
    } else if (aqi >= 40 && aqi < 60) {
      airQualityDescription = 'Moderate Air Quality';
    } else if (aqi >= 60 && aqi < 80) {
      airQualityDescription = 'Fair Air Quality';
    } else if (aqi >= 80 && aqi <= 100) {
      airQualityDescription = 'Excellent Air Quality';
    }

    return airQualityDescription;
  }
}

AirQualityMeter.propTypes = {
  address: React.PropTypes.string.isRequired,
  latitude: React.PropTypes.number.isRequired,
  longitude: React.PropTypes.number.isRequired,
  airQualityIndex: React.PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    address: state.airQuality.location.address,
    latitude: state.airQuality.location.latitude,
    longitude: state.airQuality.location.longitude,
    airQualityIndex: state.airQuality.data.breezometer_aqi
  };
};

const mapDispatchToProps = dispatch => {
  const allActions = Object.assign({}, { updateLocation: AirQualityActions.updateLocation });
  return bindActionCreators(allActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AirQualityMeter);
