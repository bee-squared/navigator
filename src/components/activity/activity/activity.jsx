import React from 'react';
import propTypes from 'prop-types';
import Moment from 'moment';
import './activity.scss';


class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    const { activity } = this.props;
    return (
      <div className="activityContainer">
        <div className="activityHeaderContainer">
          <div className="activityDate">
            { Moment(activity.date).format('MMMM Do YYYY') }
          </div>
          <div className="activitySport">
            {activity.sport}
          </div>
        </div>
        <div className="activityTitle">
          {activity.title}
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
        <div className="activityImageContainer">
          <div className="activityImageContainerInside">
            <img className="activityImage" src={activity.photo} alt="activity"/>
          </div>
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