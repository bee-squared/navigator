import React from 'react';
import './new-activity.scss';
import ConfirmButton from '../../styled-components/confirm-button/confirm-button';
import L from 'leaflet';
import mapboxgl from 'mapbox-gl';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const lIcon = L.icon({
  iconUrl: require('../../../library/location.png'),
  iconSize: [40.41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

class NewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: null,
      sport: '',
      duration_hours: null,
      duration_minutes: null,
      distance: null,
      elevation: null,
      location: '',
      rating: null,
      photo: '',
      lat: 40.019,
      lng: -105.2705,
      zoom: 12,
      markers: [],
      address: '',
      currentLocation: false,
      geojson: {
        type: 'FeatureCollection',
        features: [],
      },
    };
  }

  handleAutocompleteChange = (address) => {
    this.setState({ address });
  };

  handleAutocompleteSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) =>
        this.setState({ lat: latLng.lat, lng: latLng.lng, location: address })
      )
      .then(() => {
        let formLocation = document.getElementById('locationInput');
        formLocation.value = this.state.location;
      })
      .catch((error) => console.error('Error', error));
  };

  componentDidMount = () => {
    // get current position //
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    // this function does not return a value, set state instead
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          currentLocation: true,
        });
      },
      error,
      options
    );

    //////////// MAPBOX ////////////
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/b-squared/cka3cmzcw0a3n1ilaumvr7yao',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    let geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [this.state.lng, this.state.lat],
          },
        },
      ],
    };
    // let geojson = this.state.geojson;
    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentLocation === false) {
      console.log();
    }
  };

  //////////// LEAFLET ////////////
  addMarker = (e) => {
    let { markers } = this.state;
    markers[0] ? markers.pop() : (markers = []);
    markers.push(e.latlng);
    this.setState({
      markers,
      lat: markers[0].lat,
      lng: markers[0].lng,
      zoom: e.target._zoom,
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  exitNewActivity = () => {
    window.location = `/dashboard`;
  };

  addActivity = async (e) => {
    const {
      title,
      description,
      date,
      sport,
      duration_hours,
      duration_minutes,
      distance,
      elevation,
      location,
      rating,
      lat,
      lng,
      photo,
    } = this.state;

    const localServer = process.env.REACT_APP_SERVER;

    const data = {
      title,
      description,
      date,
      sport,
      duration_hours,
      duration_minutes,
      distance,
      elevation,
      location,
      rating,
      lat,
      lng,
      photo,
    };

    let postAndClose = async () => {
      if (process.env.NODE_ENV === 'production') {
        fetch(`/addActivity`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      } else {
        fetch(`${localServer}/addActivity`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      }
    };

    postAndClose().then(() => this.exitNewActivity());
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const { currentLocation, address, mapboxMap } = this.state;
    const { activityId } = this.props.match.params;

    mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    return (
      <div className='newActivityContainer'>
        <div className='pageHeaderContainer'>
          <div className='newActivityPageHeader'>Add a New Activity</div>
          <button
            type='text'
            className='cancelButtonHeader'
            onClick={this.exitNewActivity}
          >
            Cancel
          </button>
        </div>
        <div className='newActivityBody'>
          {mapboxgl.accessToken ? (
            <div
              ref={(el) => (this.mapContainer = el)}
              className='mapContainer'
            />
          ) : null}
          <Map
            className='map'
            center={position}
            zoom={this.state.zoom}
            onClick={this.addMarker}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} icon={lIcon}>
              <Popup>{`Lat: ${position[0]}, Lng: ${position[1]}`}</Popup>
            </Marker>
          </Map>
          <form
            className='newActivityForm'
            name='newActivityForm'
            onSubmit={this.addActivity}
          >
            <PlacesAutocomplete
              value={address}
              onChange={this.handleAutocompleteChange}
              onSelect={this.handleAutocompleteSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <div required className='inputHeader'>
                    Location
                  </div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'textInput',
                      name: 'location',
                      id: 'locationInput',
                    })}
                  />
                  <div className='autocomplete-dropdown-container'>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <div className='inputHeader'>Title</div>
            <input
              required
              className='textInput'
              type='text'
              name='title'
              onChange={this.handleChange}
            />
            <div className='inputBlockContainer'>
              <div className='sportContainer'>
                <div className='inputSportHeader'>Sport</div>
                <select
                  id='sport'
                  className='DropDownInput'
                  name='sport'
                  onChange={this.handleChange}
                >
                  <option value='none'>Select a Sport</option>
                  <option value='Climb'>Climb</option>
                  <option value='Hike'>Hike</option>
                  <option value='Ride'>Ride</option>
                  <option value='Run'>Run</option>
                  <option value='Swim'>Swim</option>
                </select>
              </div>
              <div className='dateContainer'>
                <div className='inputHeader'>Date</div>
                <input
                  required
                  className='dateInput'
                  type='date'
                  name='date'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='inputBlockContainer'>
              <div className='durationContainer'>
                <div className='inputHeader'>Duration</div>
                <div className='durationHoursMinutesContainer'>
                  <input
                    id='durationHours'
                    className='textInput'
                    type='text'
                    name='duration_hours'
                    placeholder='Hours'
                    onChange={this.handleChange}
                  />
                  <input
                    id='durationMinutes'
                    className='textInput'
                    type='text'
                    name='duration_minutes'
                    placeholder='Minutes'
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='distanceContainer'>
                <div className='inputHeader'>Distance</div>
                <input
                  className='textInput'
                  type='text'
                  name='distance'
                  placeholder='Distance in miles'
                  onChange={this.handleChange}
                />
              </div>
              <div className='elevationContainer'>
                <div className='inputHeader'>Elevation</div>
                <input
                  className='textInput'
                  type='text'
                  name='elevation'
                  placeholder='Elevation in miles'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='inputHeader'>Description</div>
            <textarea
              className='textAreaInput'
              type='text'
              name='description'
              onChange={this.handleChange}
            />
            <div className='inputHeader'>Rating</div>
            <select
              id='activityRating'
              name='rating'
              onChange={this.handleChange}
            >
              <option className='ratingOption' value='none'>
                Select a Rating
              </option>
              <option className='ratingOption' value='5'>
                5 - Glorious
              </option>
              <option className='ratingOption' value='4'>
                4 - Memorable
              </option>
              <option className='ratingOption' value='3'>
                3 - Meh
              </option>
              <option className='ratingOption' value='2'>
                2 - Just Okay
              </option>
              <option className='ratingOption' value='1'>
                1 - Never Again
              </option>
            </select>
            <div className='photoContainer'>
              <div className='inputHeader'>Photo/Map Url</div>
              <input
                className='textInput'
                type='text'
                name='photo'
                onChange={this.handleChange}
              />
            </div>
          </form>
          <div className='buttonContainer'>
            <ConfirmButton name={'Create'} function={this.addActivity} />
            <button
              type='text'
              className='cancelButton'
              onClick={this.exitNewActivity}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewActivity;
