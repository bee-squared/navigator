import React from 'react';
import propTypes from 'prop-types';
import './recommendations.scss';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
      location: null,
      elevation: null,
      sport: null,
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { distance, location, elevation, sport } = this.state;
    const { getRecommendations } = this.props;

    if (!distance && !location && !elevation && !sport) {
      // need to let the user know there is nothing selected
    } else {
      
    }

    // `${process.env.REACT_APP_REST_API_LOCATION}${process.env.REACT_APP_API_PORT}/allActivities`
  }

  render () {
    const { activityList } = this.state;
    return (
      <div className="recommendationsContainer">
        <form className="recommendationsForm" onSubmit={this.handleSubmit}>
          <div className="inputGoalTitle">Sport</div>
          <div className="goalInputDropdown">
            <select id="sport" className="dropdownInput" name="sport" onChange={this.handleChange}>
              <option value="none">Select a Sport</option>
              <option value="Climb">Climb</option>
              <option value="Hike">Hike</option>
              <option value="Ride">Ride</option>
              <option value="Run">Run</option>
              <option value="Swim">Swim</option>
            </select>
          </div>
          <div className="inputGoalTitle">Distance</div>
          <div>
            <input type="text" className="goalInput" name="distance" onChange={this.handleChange}/>
          </div>
          <div className="inputGoalTitle">Location</div>
          <div>
            <input type="text" className="goalInput" name="location" onChange={this.handleChange}/>
          </div>
          <div className="inputGoalTitle">Elevation</div>
          <div>
            <input type="text" className="goalInput" name="elevation" onChange={this.handleChange}/>
          </div>
          <button className="getRecommendationsButton" type="submit">Get Recommendations</button>
        </form>
      </div>
    );
  }
}

Recommendations.propTypes = {
  getRecommendations: propTypes.func.isRequired,
}

export default Recommendations;