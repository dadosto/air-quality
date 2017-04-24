import React from 'react';
import GoogleSearch from './GoogleSearch';
import Map from './Map';

/**
 * Google search auto complete component.
 */
class AirQualityMeter extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div>
          <GoogleSearch />
          <Map latitude={41.9973462} longitude={21.42799560000003} />
        </div>
    );
  }
}

export default AirQualityMeter;
