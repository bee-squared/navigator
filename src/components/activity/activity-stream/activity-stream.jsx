import React from 'react';

class ActivityStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityList: [],
    }
  }

  componentDidMount() {
    
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