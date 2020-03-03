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
          <div className="avatarContainer">
            <ImageAvatar url={`${process.env.REACT_APP_PHOTOS}/navigator/profile_gswemr.jpg`}/>
          </div>
          <div className="userNameLocationContainer">
            <div className="userFullName">
              Brian Bouchard
            </div>
            <div className="hometownContainer">
              <div className="hometownTitle">Hometown: </div>
              <div className="hometown">Boulder, CO</div>
            </div>
          </div>
        </div>
        <div className="lowerActivityProfileContainer">
          <div className="dividerLine"></div>
          <div className="profileStatsContainer">
            <div className="profileStatTitle">Last Activity:</div>
            <span> </span>
            <div className="profileStat">Date Holder</div>
          </div>
          <div className="dividerLine"></div>
          <div className="profileStatsContainer">
            <div className="profileStatTitle">{`Active Days This Year: `}</div>
            <span> </span>
            <div className="profileStat">Number of Active Days Holder</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityProfile;