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

  handleReset = (e) => {
    e.preventDefault();
    const { handleClear  } = this.props;
    const { formFields } = this.state;

    for (let key in formFields) {
      if (formFields[key] != null) {
        formFields[key] = null;
      }
    }

    this.setState({ formFields, toggleRecommendations: false }, () => {
      handleClear();
    })
    let fields = document.getElementsByClassName('recommendationsForm');

    for (let key in fields[0].elements) {
      if (fields[0].elements[key].name === 'sport' ) {
        fields[0].elements[key].value = 'none';
      } else if (
          fields[0].elements[key].name === 'location' ||
          fields[0].elements[key].name === 'elevation' ||
          fields[0].elements[key].name === 'distance') {
        fields[0].elements[key].value = null;
      }
    }
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
          { toggleRecommendations ? <button type="reset" className="clearButton" onClick={this.handleReset}>Clear</button> : null }
        </form>
      </div>
    );
  }
}

Recommendations.propTypes = {
  getRecommendations: propTypes.func.isRequired,
  handleClear: propTypes.func.isRequired,
}

export default Recommendations;