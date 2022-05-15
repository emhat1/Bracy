// Importing external dependencies
import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="card-body">
        <h5 className="card-title">Organisation: {props.title}</h5>
          <p className="card-text">Specialty: {props.rescueType}</p>
          <p className="card-text">Suburb: {props.suburb}</p>
          <p className="card-text">State: {props.state}</p>
          <p className="card-text">Website: {props.website}</p>
          <a href="{props.website}" className="btn btn-primary">
            Go To Website {props.website}
          </a>
        </div>
      </div>
    </div>
  );
}
