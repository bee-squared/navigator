import React from 'react';
import activityList from '../../example-data/activities';

class ActivityStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityList: activityList,
    }
  }

  render () {

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