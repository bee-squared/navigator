  import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="profileContainer">
        This is the profile page
      </div>
    )
  }
}

Profile.propTypes = {

};

export default Profile;