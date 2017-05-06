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

    this.state = {
      location: 'Skopje, Macedonia (FYROM)',
      latitude: 41.9973462,
      longitude: 21.42799560000003,
      aqi: 60
    };

    this.locationChangeHandler = this.locationChangeHandler.bind(this);

  }

  locationChangeHandler(data) {
    const {
      updateLocation
    } = this.props;

    this.setState({
      location: data.location,
      latitude: data.latitude,
      longitude: data.longitude
    });

    updateLocation(data.latitude, data.longitude, data.location);
  }

  render() {

    const {
      latitude,
      longitude,
      aqi
    } = this.state;

    const index = Math.floor(Math.random() * 100) + 1;
    const airQualityDescription = AirQualityMeter.getAirQualityDescription(index);

    return (
        <div>
          <GoogleSearch locationChangeHandler={this.locationChangeHandler} />
          <div className="map-and-quility-index-container">
            <div className="circularProgressbar-wrapper">
              <div className="air-quality-index-title">Air Quality Index</div>
              <CircularProgressbar percentage={index} textForPercentage={(percent) => `${percent} aqi`}/>
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

const mapDispatchToProps = dispatch => {
  const allActions = Object.assign({}, { updateLocation: AirQualityActions.updateLocation });
  return bindActionCreators(allActions, dispatch);
};

export default connect(null, mapDispatchToProps)(AirQualityMeter);
