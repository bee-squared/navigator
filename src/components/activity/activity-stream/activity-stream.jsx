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
    // use NODE_ENV heroku production environment variable to evaluate environment
    if (process.env.NODE_ENV === 'production') {
      fetch('/allActivities')
        .then((results) => results.json())
        .then((activityList) => this.setState({ activityList }));
    } else {
      fetch(`${process.env.REACT_APP_SERVER}/allActivities`)
        .then((results) => results.json())
        .then((activityList) => this.setState({ activityList }));
    }
  }

  getRecommendations = (params) => {
    let queryParams = '';

    for (let i = 0; i < Object.entries(params).length; i++) {
      i === 0
      ?
      queryParams += `?${Object.entries(params)[i][0]}=${Object.entries(params)[i][1]}`
      :
      queryParams += `&${Object.entries(params)[i][0]}=${Object.entries(params)[i][1]}`;
    }

    // use NODE_ENV heroku production environment variable to evaluate environment
    if (process.env.NODE_ENV === 'production') {
      fetch(`/recommendations${queryParams}`)
        .then((results) => results.json())
        .then((activityList) => this.setState({ activityList }));
    } else {
      fetch(`${process.env.REACT_APP_SERVER}/recommendations${queryParams}`)
        .then((results) => results.json())
        .then((activityList) => this.setState({ activityList }));
    }
  }

  handleClear = (e) => {
    // use NODE_ENV heroku production environment variable to evaluate environment
    if (process.env.NODE_ENV === 'production') {
      fetch(`/allActivities`)
        .then((results) => results.json())
        .then((activityList) => this.setState({ activityList }));
    } else {
      fetch(`${process.env.REACT_APP_SERVER}/allActivities`)
        .then((results) => results.json())
        .then((activityList) => this.setState({ activityList }));
    }

  }

  render () {
    const { activityList } = this.state;
    return (
      <div className="activityStreamContainer">
        <aside className="asideLeft">
          <div className="activityColumnHeader">Profile</div>
          <ActivityProfile lastActivity={activityList[0]} className="activityProfileComponent"/>
          {/* <div className="activityColumnHeader">
            Analytics
            <div className="analyticsContainer"></div>
          </div> */}
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
          <div className="activityColumnHeader">Get Recommendations</div>
          <Recommendations getRecommendations={this.getRecommendations} handleClear={this.handleClear}/>
        </aside>
      </div>
    );
  }
}

export default ActivityStream;