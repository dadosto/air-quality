import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GoogleSearch from './GoogleSearch';
import Map from './Map';
import CircularProgressbar from 'react-circular-progressbar';
import * as AirQualityActions from '../actions/actions';
import { getCurrentDate, getDateFromTwoWeeksAgo } from '../util/dateUtils';
import ChartPage from './ChartPage';

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

    const currentDate = getCurrentDate();
    const pastDate = getDateFromTwoWeeksAgo();

    updateLocation(data.latitude, data.longitude, data.location);
    fetchData(pastDate, currentDate, data.latitude, data.longitude);
  }

  render() {

    const {
      location,
      airQualityIndex,
      breezometer_description,
      breezometer_color,
      random_recommendations
    } = this.props;

    const qualityColorStyle = {
      backgroundColor: breezometer_color
    };

    return (
        <div>
          <GoogleSearch locationChangeHandler={this.locationChangeHandler} />
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
              <div>Recommendations</div>
              <ul>
                {
                  Object.keys(random_recommendations).map(function(key) {
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
  airQualityIndex: React.PropTypes.number.isRequired,
  breezometer_description: React.PropTypes.string.isRequired,
  breezometer_color: React.PropTypes.string.isRequired,
  random_recommendations: React.PropTypes.shape({}),
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
