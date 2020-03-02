import React from 'react';
import './new-activity.scss';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


class NewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {

    const style = {
      color: '#ffffff',
      backgroundColor: '#336699',
    };

    return (

      <div className="newActivityContainer">
        <div className="newActivityPageHeader">Add a New Activity</div>
        <div className="newActivityBody">
          <form>
            <div className="inputHeader">Title</div>
            <input className="textInput" type="text" name="title"/>
            <div className="inputBlockContainer">
              <div className="sportContainer">
                <div className="inputSportHeader">Sport</div>
                  <select id="sport" class="DropDownInput" name="sport">
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
                <input className="dateInput" type="date" name="date"/>
              </div>
            </div>
            <div className="inputBlockContainer">
              <div className="durationContainer">
                <div className="inputHeader">Duration</div>
                <div className="durationHoursMinutesContainer">
                  <input id="durationHours" className="textInput" type="text" name="durationHours" placeholder="Hours"/>
                  <input id="durationMinutes" className="textInput" type="text" name="durationMinutes" placeholder="Minutes"/>
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
            <div className="inputHeader">Location</div>
            <input className="textInput" type="text" name="location"/>
            <div className="inputHeader">Description</div>
            <textarea className="textAreaInput" type="text" name="description"/>
            <div className="inputHeader">Rating</div>
            <select id="activityRating" name="rating">
              <option class="ratingOption" value="none">Select a Rating</option>
              <option class="ratingOption" value="5">5 - Glorious</option>
              <option class="ratingOption" value="4">4 - Memorable</option>
              <option class="ratingOption" value="3">3 - Meh</option>
              <option class="ratingOption" value="2">2 - Just Okay</option>
              <option class="ratingOption" value="1">1 - Never Again</option>
            </select>
          </form>
          <div className="buttonContainer">
            <Button style={style} variant="text">Add Activity</Button>
            <button type="text" className="cancelButton">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewActivity;