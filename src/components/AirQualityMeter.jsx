import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GoogleSearch from './GoogleSearch';
import Map from './Map';
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
      longitude: 21.42799560000003
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

    updateLocation(data.latitude, data.longitude);
  }

  render() {

    const {
      latitude,
      longitude
    } = this.state;

    return (
        <div>
          <GoogleSearch locationChangeHandler={this.locationChangeHandler} />
          <Map latitude={latitude} longitude={longitude} />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const allActions = Object.assign({}, { updateLocation: AirQualityActions.updateLocation });
  return bindActionCreators(allActions, dispatch);
};

export default connect(null, mapDispatchToProps)(AirQualityMeter);
