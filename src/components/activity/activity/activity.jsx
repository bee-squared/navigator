import React from 'react';
import propTypes from 'prop-types';
import Moment from 'moment';
import '../../../library/weather-icons-master/css/weather-icons.css'
import './activity.scss';


class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherIcon: 'wi-day-sunny',
    }
  }

  componentDidMount() {
    const { activity } = this.props;
    let displayIcon;

    if (activity.weather) {
      const { icon } = activity.weather;
      switch (icon) {
        case 'clear-day':
          displayIcon = 'wi-day-sunny';
          break;
        case 'clear-night':
          displayIcon = 'wi-night-clear';
          break;
        case 'partly-cloudy-day':
          displayIcon = 'wi-day-cloudy-high';
          break;
        case 'partly-cloudy-night':
          displayIcon = 'night-alt-partly-cloudy';
          break;
        case 'cloudy':
          displayIcon = 'wi-day-cloudy-high';
          break;
        case 'rain':
          displayIcon = 'wi-day-rain';
          break;
        case 'sleet':
          displayIcon = 'wi-day-sleet';
          break;
        case 'snow':
          displayIcon = 'wi-day-snow';
          break;
        case 'wind':
          displayIcon = 'wi-day-windy';
          break;
        case 'fog':
          displayIcon = 'wi-fog';
          break;
        default:
          displayIcon = 'partly-cloudy-day'
      }
    }
    this.setState({ weatherIcon: displayIcon })
  }

  render () {
    const { weatherIcon } = this.state;
    const { activity } = this.props;
    return (
      <div className="activityContainer">
        <div className="activityHeaderContainer">
          <div className="activityId" hidden>{activity._id}</div>
          <div className="activityDate">
            { Moment(activity.date).format('MMMM Do YYYY') }
          </div>
          <div className="activitySport">
            {activity.sport}
          </div>
        </div>
        <div className="activityTitle">
          <a id="activityTitle" href={`/activity/${activity._id}`}>{activity.title}</a>
        </div>
        <div className="activityDetailsContainer">
          <div className="distanceContainer">
            <div className="activityDetailTitle">Distance</div>
            <div className="activityDetail">{activity.distance}</div>
          </div>
          <div className="elevationContainer">
            <div className="activityDetailTitle">Elevation</div>
            <div className="activityDetail">{activity.elevation}</div>
          </div>
          <div className="timeContainer">
            <div className="activityDetailTitle">Time</div>
            <div className="activityDetail">{`${activity.duration_hours}h ${activity.duration_minutes}m`}</div>
          </div>
        </div>
          {
            activity.photo
              ?
                <div className="activityImageContainer">
                  <div className={
                    activity.photo.includes('google')
                      ?
                        'activityImageContainerInsideMap'
                      :
                        'activityImageContainerInside'}>
                    {activity.photo.includes('google')
                      ?
                        <iframe title="routeMap" className="routeMap" src={`${activity.photo}&zoom=8`}></iframe>
                      :
                        <img className="activityImage" src={activity.photo} alt="activity"/>}
                  </div>
                </div>
              :
                null
          }
        <div className="activityWeatherContainer">
          <div className="activityWeather">
            { activity.weather ? 'Avg Temperature: ' : null }
            { activity.weather
              ?
                <span>
                  {((activity.weather.temperatureMax + activity.weather.temperatureMin) / 2).toFixed(1)}
                </span>
              :
                null
            }
            { activity.weather ? String.fromCharCode(176) : null }
            { activity.weather ? 'F  ' : null }
            { activity.weather ? <i className={`wi ${weatherIcon}`}></i> : null}
            { activity.weather ?
              <div>
                <a className="poweredBy" href="https://darksky.net/poweredby/">Powered by Darksky</a>
              </div> : null}
          </div>
            { activity.weather
              ?
                <div className="weatherSummary">
                  {activity.weather.summary}
                </div>
              :
                null
            }
        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  activity: propTypes.shape({
  title: propTypes.string,
  description: propTypes.string,
  sport: propTypes.string.isRequired,
  duration_hours: propTypes.number,
  duration_minutes: propTypes.number,
  distance: propTypes.number,
  elevation: propTypes.number,
  location: propTypes.string,
  photo: propTypes.string,
  __v: propTypes.number,
  }),
}

export default Activity;