import React from 'react';
import propTypes from 'prop-types';

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
        <div className="activityDetails">
          { activity._id }
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