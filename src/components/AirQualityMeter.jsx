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
      latitude: 41.9973462,
      longitude: 21.42799560000003
    };

  }

  render() {

    const {
      latitude,
      longitude
    } = this.state;

    return (
        <div>
          <GoogleSearch addressChangeHandler={
            (data) => {
              this.setState({
                latitude: data.latitude,
                longitude: data.longitude
              });
            }}
          />
          <Map latitude={latitude} longitude={longitude}/>
        </div>
    );
  }
}

export default AirQualityMeter;
