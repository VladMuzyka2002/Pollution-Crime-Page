import React from 'react';
import './Bibliography.css';

const Bibliography = () => {
  return (
    <div className="bibliography-container">
      <h2 className="bibliography-title">Bibliography</h2>
      <div className="bibliography-section">
        <h3 className="bibliography-subtitle">Images</h3>
        <ul className="bibliography-list">
          <li>Image 1: "Advantages of CHP." Gizmodo.Com.Au, 23 Oct. 2019, highlandwestenergy.com/wp-content/uploads/2018/10/Advantages-of-CHP.jpg.</li>
          <li>Image 2: "Crime Scene Tape Police Line Teaser." Www.Toledoblade.Com, 22 Feb. 2017, www.voanews.com/a/science-health_water-pollution-invisible-threat-global-goals-economists-warn/6174276.html.</li>
          <li>Image 3: "A Man on a Boat Collects Plastic Materials from Dirty Water in Dhaka, Bangladesh, April 17, 2019." Www.Voanews.Com, 17 Apr. 2019, https://gdb.voanews.com/81ed3df2-8d86-4277-ae7e-bfbce08a0f7f_w650_r0.jpg</li>
        </ul>
      </div>
      <div className="bibliography-section">
        <h3 className="bibliography-subtitle">Research</h3>
        <ul className="bibliography-list">
          <li>Source 1: Plain, Charlie. “Air Pollution Linked to Increases in Violent Criminal Behavior - School of Public Health - University of Minnesota.” School of Public Health, 30 Oct. 2019, www.sph.umn.edu/news/air-pollution-linked-to-increases-in-violent-criminal-behavior/. </li>
          <li>Source 2: “Exposure to Air Pollution Increases Violent Crime Rates.” ScienceDaily, ScienceDaily, 3 Oct. 2019, www.sciencedaily.com/releases/2019/10/191003114007.htm. </li>
          <li>Source 3: Kuo, Pei-Fen, and I Gede Brawiswa Putra. “Analyzing the Relationship between Air Pollution and Various Types of Crime.” PloS One, U.S. National Library of Medicine, 13 Aug. 2021, www.ncbi.nlm.nih.gov/pmc/articles/PMC8362969/. .</li>
        </ul>
      </div>
    </div>
  );
};

export default Bibliography;
