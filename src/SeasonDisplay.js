import './SeasonDisplay.css';
import React from 'react';
import Clock from "./Clock"

//not how a simple object can be used for decisions
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
};

//simple function to return season based on latitude, taking into acc date and latitude
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

//seasonDisplay Component takes props
const SeasonDisplay = props => {
  //season is current result of getSeason, taking lat and current data as arguments
  const season = getSeason(props.lat, new Date().getMonth());

  //use a js object to get the contents of text and iconName
  const { text, iconName } = seasonConfig[season];

  //Note how we also use season to control css 
  //This returns a css-controlled component
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
      <Clock></Clock>
    </div>
  );
};

export default SeasonDisplay;
