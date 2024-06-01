import React from 'react';
import './Page.css';
import Bibliography from './Bibliography';

const Page = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">The Link Between Crime and Pollution</h1>
      <h2 className="page-subtitle">Group 7: Vlad Muzyka, Andrew McRae, Ethan Harriz</h2>
      <p className="page-paragraph">
        Pollution is one of the most impactful global crises in the 21st century. The dangers of pollution is far reaching, from the vital things such as human and wildlife health to the grand concepts such as societal structure. One would likely not be surprised to learn that pollution contributes to crime around the world, but one will certainly be dumbfounded by the sheer correlation between these two crises.
      </p>
      <figure>
        <img src="/Images/pollution1.png" alt="Ice cream dog 1" className="page-image" />
        <figcaption>Image 1</figcaption>
      </figure>
      <p className="page-paragraph">
        The consequences of pollution are far-reaching and devastating. It leads to respiratory diseases, heart conditions, and even cancer. Wildlife suffers as habitats are destroyed, and ecosystems are disrupted. It's a silent crime that requires immediate action from individuals, corporations, and governments.
      </p>
      <figure>
        <img src="/Images/crime1.png" alt="Ice cream dog 2" className="page-image" />
        <figcaption>Image 2</figcaption>
      </figure>
      <Bibliography />
    </div>
  );
};

export default Page;