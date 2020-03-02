import React from 'react';
import propTypes from 'prop-types';
import './new-activity.scss';


class NewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div className="newActivityContainer">
        New Activity Page
      </div>
    );
  }
}

NewActivity.propTypes = {

}

export default NewActivity;