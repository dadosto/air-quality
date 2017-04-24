import React from 'react';
import GoogleSearch from './GoogleSearch';
import Map from './Map';

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

    this.setState({
      location: data.location,
      latitude: data.latitude,
      longitude: data.longitude
    });
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

export default AirQualityMeter;
