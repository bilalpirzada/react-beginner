import React from 'react';

function Tweet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.message}</h4>
      <h3>{props.likes}</h3>
    </div>
  );
}

export default Tweet;
