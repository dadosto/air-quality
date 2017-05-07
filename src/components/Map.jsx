import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const defaultZoom = 11;

/**
 * Google map component.
 */
class Map extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.latitude !== nextProps.latitude || this.props.longitude !== nextProps.longitude;
  }

  render() {

    const {
      latitude,
      longitude
    } = this.props;

    const placeMarker = {
      position: {
        lat: latitude,
        lng: longitude,
      },
      defaultAnimation: 2,
    };

    const GoogleMapWrapper = withGoogleMap(props => (
        <GoogleMap
            defaultZoom={defaultZoom}
            defaultCenter={{ lat: latitude, lng: longitude }}
        >
          { props.markers.map((marker, index) => (
              <Marker key={index} {...marker} />
          ))}
        </GoogleMap>
    ));

    return (
        <div className="map-container">
          <GoogleMapWrapper
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              markers={[placeMarker]}
          />
        </div>
    );
  }
}

Map.propTypes = {
  latitude: React.PropTypes.number.isRequired,
  longitude: React.PropTypes.number.isRequired
};

export default Map;
