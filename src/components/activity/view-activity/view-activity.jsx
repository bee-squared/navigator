import React from 'react';
import './view-activity.scss';
import {

} from "react-router-dom";

class ViewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render () {
    const { match: { params } } = this.props;
    return (
      <div className="viewActivityContainer">
        <div className="title">Title: {params.activityId}</div>
        <input required className="textInput" type="text" name="title"/>
        <div className="inputBlockContainer">
          <div className="sportContainer">
            <div className="inputSportHeader">Sport</div>
              <select id="sport" className="DropDownInput" name="sport">
                <option value="none">Select a Sport</option>
                <option value="Climb">Climb</option>
                <option value="Hike">Hike</option>
                <option value="Ride">Ride</option>
                <option value="Run">Run</option>
                <option value="Swim">Swim</option>
              </select>
          </div>
          <div className="dateContainer">
            <div className="inputHeader">Date</div>
            <input required className="dateInput" type="date" name="date"/>
          </div>
        </div>
        <div className="inputBlockContainer">
          <div className="durationContainer">
            <div className="inputHeader">Duration</div>
            <div className="durationHoursMinutesContainer">
              <input id="durationHours" className="textInput" type="text" name="duration_hours" placeholder="Hours"/>
              <input id="durationMinutes" className="textInput" type="text" name="duration_minutes" placeholder="Minutes"/>
            </div>
          </div>
          <div className="distanceContainer">
            <div className="inputHeader">Distance</div>
            <input className="textInput" type="text" name="distance" placeholder="Distance in miles"/>
          </div>
          <div className="elevationContainer">
            <div className="inputHeader">Elevation</div>
            <input className="textInput" type="text" name="elevation" placeholder="Elevation in miles"/>
          </div>
        </div>
        <div className="inputHeader">Description</div>
        <textarea className="textAreaInput" type="text" name="description"/>
        <div className="inputHeader">Rating</div>
        <select id="activityRating" name="rating">
          <option className="ratingOption" value="none">Select a Rating</option>
          <option className="ratingOption" value="5">5 - Glorious</option>
          <option className="ratingOption" value="4">4 - Memorable</option>
          <option className="ratingOption" value="3">3 - Meh</option>
          <option className="ratingOption" value="2">2 - Just Okay</option>
          <option className="ratingOption" value="1">1 - Never Again</option>
        </select>
        <div className="photoContainer">
            <div className="inputHeader">Photo/Map Url</div>
            <input className="textInput" type="text" name="photo"/>
        </div>
      </div>
    );
  }
}

export default ViewActivity;