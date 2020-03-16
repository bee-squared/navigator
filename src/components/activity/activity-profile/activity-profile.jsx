import React from 'react';
import Moment from 'moment';
import './activity-profile.scss';
import ImageAvatar from '../../styled-components/image-avatar/image-avatar'
import propTypes from 'prop-types';

class ActivityProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDays: 0,
    }
  }

  componentDidMount() {
    // use NODE_ENV heroku production environment variable to evaluate environment
    if (process.env.NODE_ENV === 'production') {
      fetch(`/activeDays`)
      .then((results) => results.json())
      .then((activeDays) => this.setState({ activeDays }));
    } else {
      fetch(`${process.env.REACT_APP_SERVER}/activeDays`)
        .then((results) => results.json())
        .then((activeDays) => this.setState({ activeDays }));
    }
  }

  render () {
    const { activeDays } = this.state;
    const { lastActivity } = this.props;

    return (
      <div className="activityProfileContainer">
        <div className="profileHeaderContainer">
          <div className="avatarContainer">
            <div className="userAvatar">
              <ImageAvatar url={`${process.env.REACT_APP_PHOTOS}/navigator/profile_gswemr.jpg`}/>
            </div>
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
            <div className="profileStat">{lastActivity ? Moment(lastActivity.date).format('MMMM Do YYYY') : null}</div>
          </div>
          <div className="dividerLine"></div>
          <div className="profileStatsContainer">
            <div className="profileStatTitle">{`Active Days This Year: `}</div>
            <span> </span>
            <div className="profileStat">{activeDays}</div>
          </div>
        </div>
      </div>
    );
  }
}

ActivityProfile.propTypes = {
  lastActivity: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
    sport: propTypes.string.isRequired,
    duration_hours: propTypes.number,
    duration_minutes: propTypes.number,
    distance: propTypes.number,
    elevation: propTypes.number,
    location: propTypes.string,
    photo: propTypes.string,
    __v: propTypes.number,
    }),
}

export default ActivityProfile;