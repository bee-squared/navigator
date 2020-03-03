import React from 'react';
import './activity-profile.scss';
import ImageAvatar from '../../styled-components/image-avatar/image-avatar'
import propTypes from 'prop-types';

class ActivityProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div className="activityProfileContainer">
        <div className="profileHeaderContainer">
          <ImageAvatar url={`${process.env.REACT_APP_PHOTOS}/navigator/profile_gswemr.jpg`}/>
          <div className="userNameLocationContainer">
            <div className="userFullName">
              Brian Bouchard
            </div>
            <div className="hometown">
              Boulder, CO
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityProfile;