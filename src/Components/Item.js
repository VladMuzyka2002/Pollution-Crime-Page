import React from 'react';
import './Item.css';
import BulletPoints from './BulletPoints';

const Item = ({ children, points }) => {
  return (
    <div className="item">
      {children}
      {points && <BulletPoints points={points} />}
    </div>
  );
};

export default Item;
