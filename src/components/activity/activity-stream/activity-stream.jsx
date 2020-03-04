import React from 'react';
import Activity from '../activity/activity';
import ActivityProfile from '../activity-profile/activity-profile';
import Recommendations from '../recommendations/recommendations';
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

  getRecommendations = (params) => {
    const { activityList } = this.state;
    fetch(`${process.env.REACT_APP_REST_API_LOCATION}${process.env.REACT_APP_API_PORT}/allActivities`, {

    })
      // .then((results) => results.json())
      // .then((data) => console.log(data))
      // .then((activityList) => this.setState({ activityList }));
  }

  render () {
    const { activityList } = this.state;
    return (
      <div className="activityStreamContainer">
        <aside className="asideLeft">
          <div className="activityColumnHeader">Profile</div>
          <ActivityProfile lastActivity={activityList[0]}/>
        </aside>
        <section className="mainSection">
          <div className="activityColumnHeader">Activity Log</div>
          <div className="activityStream">
            {activityList ? activityList.map((activity) => {
              return <Activity activity={activity} key={`a${activity._id}`} />
            }) : null }
          </div>
        </section>
        <aside className="asideRight">
          <div className="activityColumnHeader">Find a Route</div>
          <Recommendations getRecommendations={this.getRecommendations}/>
        </aside>
      </div>
    );
  }
}

export default ActivityStream;