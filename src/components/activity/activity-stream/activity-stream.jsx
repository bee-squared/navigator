import React from 'react';
import Activity from '../activity/activity';
import ActivityProfile from '../activity-profile/activity-profile'
import './activity-stream.scss';

class ActivityStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityList: [],
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_REST_API_LOCATION}${process.env.REACT_APP_API_PORT}/allActivities`)
      .then((results) => results.json())
      .then((activityList) => this.setState({ activityList }));
  }

  render () {
    const { activityList } = this.state;
    return (
      <div className="activityStreamContainer">
        <aside className="asideLeft">
          <ActivityProfile lastActivity={activityList[0]}/>
        </aside>
        <section className="mainSection">
          <div className="activityStream">
            {activityList ? activityList.map((activity) => {
              return <Activity activity={activity} key={`a${activity._id}`} />
            }) : null }
          </div>
        </section>
        <aside className="asideRight">
          right
        </aside>
      </div>
    );
  }
}

export default ActivityStream;