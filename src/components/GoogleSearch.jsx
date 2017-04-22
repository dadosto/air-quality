import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

/**
 * Google search auto complete component.
 */
class GoogleSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      address: '',
      loading: false,
      geocodeResults: null
    };
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.selectAddressHandler = this.selectAddressHandler.bind(this);
    this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this);
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this);
  }

  changeAddressHandler(address) {
    this.setState({
      address,
      geocodeResults: null
    })
  }

  selectAddressHandler(address) {

    this.setState({
      address,
      loading: true
    });

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) {
        console.log('Oh no!', err);
        this.setState({
          geocodeResults: this.renderGeocodeFailure(err),
          loading: false
        })
      }
      console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng });
      this.setState({
        geocodeResults: this.renderGeocodeSuccess(lat, lng),
        loading: false
      })
    })
  }


  renderGeocodeFailure(err) {
    return (
        <div className="alert alert-danger" role="alert">
          <strong>Error!</strong> {err}
        </div>
    );
  }

  renderGeocodeSuccess(lat, lng) {
    return (
        <div className="alert alert-success" role="alert">
          <strong>Success!</strong> Geocoder found latitude and longitude: <strong>{lat}, {lng}</strong>
        </div>
    );
  }


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.changeAddressHandler,
      placeholder: 'Search Places...'
    };

    return (
        <div className="google-search-autocomplete">
          <PlacesAutocomplete
              inputProps={inputProps}
              onSelect={this.selectAddressHandler}
              onEnterKeyDown={this.selectAddressHandler} />

          {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
          {!this.state.loading && this.state.geocodeResults ?
              <div className='geocoding-results'>{this.state.geocodeResults}</div> :
              null}

        </div>
    );
  }
}

export default GoogleSearch;
