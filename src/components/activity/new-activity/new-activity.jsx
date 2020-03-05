import React from 'react';
import './new-activity.scss';
import ConfirmButton from '../../styled-components/confirm-button/confirm-button';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const lIcon = L.icon({
  iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII',
  iconSize: [25.41],
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
      lat: 39.7392,
      lng: -104.9903,
      zoom: 12,
      markers: [],
    }
  }

  componentDidMount = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    // this.setState({ lat: crd.latitude, lng: crd.longitude })

    function success(pos) {
      var crd = pos.coords;
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);


    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  addMarker = (e) => {
    console.log(e.target._zoom)
    let {markers} = this.state
    markers[0] ? markers.pop() : markers = [];
    markers.push(e.latlng)
    this.setState({markers, lat: markers[0].lat, lng: markers[0].lng, zoom: e.target._zoom})
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  exitNewActivity = () => {
    window.location = `/dashboard`;
  }



  addActivity = (e) => {
    console.log("testing the submission")
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
    } = this.state;
    const url = process.env.REACT_APP_REST_API_LOCATION;
    const port = process.env.REACT_APP_API_PORT;
    const accessKey = process.env.REACT_APP_API_UNSPLASH_ACCESS_KEY;

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
    }
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
      .then((results) => results.json())
      .then((data) => data.urls.regular)
      .then((imageUrl) => data.photo = imageUrl)
      .then(() => {
        fetch(`${url}${port}/addActivity`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(() => this.exitNewActivity())
      })
  }

  render () {
    const position = [this.state.lat, this.state.lng]

    return (
      <div className="newActivityContainer">
        <div className="newActivityPageHeader">Add a New Activity</div>
        <div className="newActivityBody">
          <Map className="map" center={position} zoom={this.state.zoom} onClick={this.addMarker}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={lIcon}>
              <Popup>
                This is a cool location
              </Popup>
            </Marker>
          </Map>
          <form className="newActivityForm" name="newActivityForm" onSubmit={this.addActivity}>
            <div className="inputHeader">Title</div>
            <input required className="textInput" type="text" name="title" onChange={this.handleChange}/>
            <div className="inputBlockContainer">
              <div className="sportContainer">
                <div className="inputSportHeader">Sport</div>
                  <select id="sport" className="DropDownInput" name="sport" onChange={this.handleChange}>
                    <option value="none">Select a Sport</option>
                    <option value="Climb">Climb</option>
                    <option value="Hike">Hike</option>
                    <option value="Ride">Ride</option>
                    <option value="Run">Run</option>
                    <option value="Swim">Swim</option>
                  </select>
              </div>
              <div className="dateContainer">
                <div className="inputHeader">Date</div>
                <input required className="dateInput" type="date" name="date" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="inputBlockContainer">
              <div className="durationContainer">
                <div className="inputHeader">Duration</div>
                <div className="durationHoursMinutesContainer">
                  <input id="durationHours" className="textInput" type="text" name="duration_hours" placeholder="Hours" onChange={this.handleChange}/>
                  <input id="durationMinutes" className="textInput" type="text" name="duration_minutes" placeholder="Minutes" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="distanceContainer">
                <div className="inputHeader">Distance</div>
                <input className="textInput" type="text" name="distance" placeholder="Distance in miles" onChange={this.handleChange}/>
              </div>
              <div className="elevationContainer">
                <div className="inputHeader">Elevation</div>
                <input className="textInput" type="text" name="elevation" placeholder="Elevation in miles" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="inputHeader">Location</div>
            <input className="textInput" type="text" name="location" onChange={this.handleChange}/>
            <div className="inputHeader">Description</div>
            <textarea className="textAreaInput" type="text" name="description" onChange={this.handleChange}/>
            <div className="inputHeader">Rating</div>
            <select id="activityRating" name="rating" onChange={this.handleChange}>
              <option className="ratingOption" value="none">Select a Rating</option>
              <option className="ratingOption" value="5">5 - Glorious</option>
              <option className="ratingOption" value="4">4 - Memorable</option>
              <option className="ratingOption" value="3">3 - Meh</option>
              <option className="ratingOption" value="2">2 - Just Okay</option>
              <option className="ratingOption" value="1">1 - Never Again</option>
            </select>
          </form>
          <div className="buttonContainer">
            <ConfirmButton name={'Create'} function={this.addActivity}/>
            <button type="text" className="cancelButton" onClick={this.exitNewActivity}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewActivity;