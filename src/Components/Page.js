import React from 'react';
import './Page.css';
import Bibliography from './Bibliography';
import Item from './Item';

const Page = () => {
  const UoMBulletPoints = [
    'Increases in daily air pollution levels raised the risk of violent criminal behavior, such as assaults.',
    'Air pollution did not increase the risk of non-violent crime, which are crimes that do not involve force, threats or injury (e.g., property theft).',
    'The risk of violent behavior increased even at low pollution concentrations that are usually considered safe for people to breathe.',
    'Results were consistent across different community types, including regions with different socioeconomic status, racial diversity and age. In other words, it is not the community driving this relationship.'
  ];

  const UoCBulletPoints = [
    'A 0.01 parts-per-million increase in same-day exposure to ozone is associated with a 0.97% increase in violent crime, or a 1.15% increase in assaults',
    'A 10 microgram-per-cubic-meter increase in same-day exposure to PM2.5 is associated with a 1.4% increase in violent crimes, nearly all of which is driven by crimes categorized as assaults', 
    'A 10 percent reduction in daily PM2.5 could save $1.1 million in crime costs per year, which they called a "previously overlooked cost associated with pollution."'
  ]

  const NLMBulletPoints = [
    'Increased in daily air pollution levels raised the risk of violent criminal behavior, such as assaults; air pollution did not increase the risk of non-violent crime, which are crimes that do not involve force, threats or injurty', 
    'The risk of violent behavior increased even at low pollution concentrations that are usually considered safe for people to breathe; results were consistent across different community types, including regions with different socioeconomic status, racial diversity and age.', 
    'It is not the community driving this relationship.'
  ]

  return (
    <div className="page-container">
      <h1 className="page-title">The Link Between Crime and Pollution</h1>
      <h2 className="page-subtitle">Group 7: Vlad Muzyka, Andrew McRae, Ethan Harriz</h2>
      <Item>
        <p className="page-paragraph">
        Pollution is one of the most impactful global crises in the 21st century. The dangers of pollution is far reaching, from the vital things such as human and wildlife health to the grand concepts such as societal structure. One would likely not be surprised to learn that pollution contributes to crime around the world, but one will certainly be dumbfounded by the sheer correlation between these two crises. Below are some interesting fundings and statistics regarding this matter.
        </p>
      </Item>
      <figure>
        <img src="./Images/pollution1.png" alt="Image 1" className="page-image" />
        <figcaption>Image 1</figcaption>
      </figure>
      <Item points={UoMBulletPoints}>
        <p className="page-paragraph">
        Charlie Plain argues that exposure to polluted air even for slight periods of time become more aggressive and violent. His study at the University of Michigan found that:
        </p>
      </Item>
      <figure>
        <img src="./Images/crime1.png" alt="Image 2" className="page-image" />
        <figcaption>Image 2</figcaption>
      </figure>
      <Item points={UoCBulletPoints}>
        <p className="page-paragraph">
        Colorado State Institute’s researchers in economics, atmospheric science, and statistics have conducted a set of studies on the effects of pollution on crime levels. They reported that:
        </p>
      </Item>
      <figure>
        <img src="./Images/pollution2.png" alt="Image 3" className="page-image" />
        <figcaption>Image 3</figcaption>
      </figure>
      <Item points={NLMBulletPoints}>
        <p className="page-paragraph">
        Pei-Fen Kuo and I. Gede Brawiswa Putraw analyzed the impact pollution has on the populace’s mental health, and how that ties into crime and violence rates. They have examined the association between daily violent and non-violent crimes and short-term increases in air pollution across 301 countries in 34 states across a 14-year period. Here is what they found:        </p>
      </Item>
      <Bibliography />
    </div>
  );
};

export default Page;
