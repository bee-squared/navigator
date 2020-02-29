import React from 'react';
import Activity from '../activity/activity'

class ActivityStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityList: [],
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_REST_API_LOCATION}${process.env.REACT_APP_API_PORT}/getAllActivities `)
      .then((results) => results.json())
      .then((activityList) => this.setState({ activityList }));
  }

  render () {
    const { activityList } = this.state;
    return (
      <div className="activityStreamContainer">
        activities
        <div className="activityStreamContainer">
          {activityList ? activityList.map((activity) => {
            return <Activity activity={activity} key={`a${activity._id}`} />
          }) : null }
        </div>
      </div>
    );
  }
}

export default ActivityStream;