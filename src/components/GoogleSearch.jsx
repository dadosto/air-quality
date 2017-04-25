import React from 'react';
import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete';

/**
 * Google search auto complete component.
 */
class GoogleSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: '',
      loading: false,
      geocodeResults: this.renderGeocodeSuccess(null, null)
    };

    this.changeLocationHandler = this.changeLocationHandler.bind(this);
    this.selectLocationHandler = this.selectLocationHandler.bind(this);
    this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this);
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this);
  }

  changeLocationHandler(location) {
    this.setState({
      location,
      geocodeResults: this.renderGeocodeSuccess(null, null)
    })
  }

  selectLocationHandler(location) {

    this.setState({
      location,
      loading: true
    });

    geocodeByAddress(location, (err, { lat, lng }) => {
      if (err) {
        console.log('Oh no!', err);
        this.setState({
          geocodeResults: this.renderGeocodeFailure(err),
          loading: false
        });
      }

      console.log(`Yay! got latitude and longitude for ${location}`, { lat, lng });
      this.setState({
        geocodeResults: this.renderGeocodeSuccess(lat, lng),
        loading: false
      });

      this.props.locationChangeHandler({ location, latitude: lat, longitude: lng });

    });
  }


  renderGeocodeFailure(err) {
    return (
        <div className="alert alert-danger" role="alert">
          <strong>Error while getting latitude and longitude!</strong> {err}
        </div>
    );
  }

  renderGeocodeSuccess(lat, lng) {

    const latitudeAndLongitudeText = lat && lng && `${lat}, ${lng}`;

    return (
        <div className="alert alert-success" role="alert">
          Selected latitude and longitude: <strong> {latitudeAndLongitudeText} </strong>
        </div>
    );
  }


  render() {
    const inputProps = {
      value: this.state.location,
      onChange: this.changeLocationHandler,
      placeholder: 'Search Places...'
    };

    const cssClasses = {
      root: 'google-search-autocomplete-root',
      input: 'google-search-input',
      autocompleteContainer: 'google-search-autocomplete-container',
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
        <div className="Demo__suggestion-item">
          <i className='fa fa-map-marker Demo__suggestion-icon'/>
          <strong>{formattedSuggestion.mainText}</strong>{' '}
          <small className="text-muted">{formattedSuggestion.secondaryText}</small>
        </div>);

    return (
        <div className="google-search-autocomplete">
          <PlacesAutocomplete
              inputProps={inputProps}
              autocompleteItem={AutocompleteItem}
              onSelect={this.selectLocationHandler}
              onEnterKeyDown={this.selectLocationHandler}
              classNames={cssClasses}
          />

          <div className="geocoding-results">
            {
              this.state.loading ?
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner"/> : null
            }
            {!this.state.loading && this.state.geocodeResults ?
                this.state.geocodeResults : null
            }
          </div>
        </div>
    );
  }
}

GoogleSearch.propTypes = {
  locationChangeHandler: React.PropTypes.func.isRequired
};

export default GoogleSearch;
