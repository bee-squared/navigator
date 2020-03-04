import React from 'react';
import propTypes from 'prop-types';
import './recommendations.scss';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        distance: null,
        location: null,
        elevation: null,
        sport: null,
      },
      toggleRecommendations: false,
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { formFields } = this.state;

    formFields[e.target.name] = e.target.value;
    this.setState({ formFields }, this.toggle);
  }

  toggle = () => {
    const { toggleRecommendations } = this.state;
    const { distance, location, elevation, sport } = this.state.formFields;

    if ((distance || location || elevation || sport) && !toggleRecommendations) {
      this.setState({ toggleRecommendations: true})
    } else if ((!distance && !location && !elevation && !sport) && toggleRecommendations){
      this.setState({ toggleRecommendations: false})
    }
  }

  handleClear = (e) => {
    // e.preventDefault();
    console.log("testing")
    // document.getElementsByClassName('recommendationsForm').resetForm();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formFields } = this.state;
    const { distance, location, elevation, sport } = this.state.formFields;
    const { getRecommendations } = this.props;
    const params = {};
    if (!distance && !location && !elevation && !sport) {
      // need to let the user know there is nothing selected
    } else {
      for (let key in formFields) {
        if (formFields[key] != null) {
          params[key] = formFields[key]
        }
      }
      getRecommendations(params)
    }
  }

  render () {
    const { toggleRecommendations } = this.state;
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
          { toggleRecommendations ? <button type="reset" className="clearButton" onClick={this.handleClear}>Clear</button> : null }
        </form>
      </div>
    );
  }
}

Recommendations.propTypes = {
  getRecommendations: propTypes.func.isRequired,
}

export default Recommendations;