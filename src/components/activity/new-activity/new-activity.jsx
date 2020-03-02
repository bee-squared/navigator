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
        <div className="newActivityPageHeader">Add a New Activity</div>
        <div className="newActivityBody">
          <form>
            <div className="inputHeader">Title</div>
            <input className="textInput" type="text" name="title"/>
            <div className="sportDateContainer">
              <div className="sportContainer">
                <div className="activityInputTitle">Sport</div>
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
          </form>
        </div>
      </div>
    );
  }
}

NewActivity.propTypes = {

}

export default NewActivity;