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
          <div className="activityOptions">

          </div>
        </div>
        <div className="activityTitle">
          {activity.title}
        </div>
        <div className="activityDescription">
          {activity.description}
        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  activity: propTypes.shape({
  id: propTypes.string.isRequired,
  title: propTypes.string,
  description: propTypes.string,
  sport: propTypes.string.isRequired,
  duration_hours: propTypes.number,
  duration_minutes: propTypes.number,
  distance: propTypes.number,
  elevation: propTypes.number,
  location: propTypes.string,
  __v: propTypes.number,
  }),
}

export default Activity;