import React from 'react';

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
      // .then((activityList) => console.log(activityList));
  }

  render () {
    // const url = process.env.API_HOST;
    return (
      <div className="activityStreamContainer">
        activities
        <div className="activityStreamContainer">

        </div>
      </div>
    );
  }
}

export default ActivityStream;