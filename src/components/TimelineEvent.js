import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // console.log(props);
  return(
    <div className="TimeLineEvent">
      <div className='timeline-event'>
      <h3 className='event-person'>{props.person}</h3>
      <p className='event-status'>{props.status}</p>
      <p className='event-time'>{<Timestamp time={props.timeStamp} />}</p>
      </div>
    </div>
  );
}

export default TimelineEvent;