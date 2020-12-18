import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  console.log(props);
  const TimelineComponents = props.events.map((post)=> {
    return (
      <TimelineEvent
      person={post.person} 
      status={post.status}
      timeStamp={post.timeStamp}
      key={post.person}/>
    )
  })
  return(
    <ul className="Timeline">
    {TimelineComponents}
  </ul>
  );
}

export default Timeline;