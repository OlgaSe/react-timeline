import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // console.log(props);
  return(
    <div className="TimeLineEvent">
      <h3>{props.person}</h3>
      <p>{props.status}</p>
      <p>{<Timestamp time={props.timeStamp} />}</p>
    </div>
  );
}

export default TimelineEvent;