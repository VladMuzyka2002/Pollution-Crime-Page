import React from 'react';
import './Bibliography.css';

const Bibliography = () => {
  return (
    <div className="bibliography-container">
      <h2 className="bibliography-title">Bibliography</h2>
      <div className="bibliography-section">
        <h3 className="bibliography-subtitle">Images</h3>
        <ul className="bibliography-list">
          <li>Image 1: (2018). Advantages of CHP [Photograph]. Highland West Energy. https://highlandwestenergy.com/wp-content/uploads/2018/10/Advantages-of-CHP.jpg</li>
          <li>Image 2: Source details for icecreamdog2.png</li>
        </ul>
      </div>
      <div className="bibliography-section">
        <h3 className="bibliography-subtitle">Research</h3>
        <ul className="bibliography-list">
          <li>Source 1: Author, "Title", Publisher, Year.</li>
          <li>Source 2: Author, "Title", Publisher, Year.</li>
          <li>Source 3: Author, "Title", Publisher, Year.</li>
        </ul>
      </div>
    </div>
  );
};

export default Bibliography;
