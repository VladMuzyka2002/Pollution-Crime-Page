import React from 'react';
import './BulletPoints.css';

const BulletPoints = ({ points }) => {
  return (
    <ul className="bullet-points">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );
};

export default BulletPoints;
