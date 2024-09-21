import React from 'react';
import "../css/SideBar.css"

const SideBar = () => {
  return (
    <div className="navigation-ports">
      <h2 className="navigation-ports__title">Navigation Ports</h2>
        <hr className="navigation-ports__hr"></hr>
      <ul className="navigation-ports__list">
        <li className="navigation-ports__item">Resting Ports</li>
        <li className="navigation-ports__item">Resting Ports</li>
        <li className="navigation-ports__item">Resting Ports</li>
        <li className="navigation-ports__item">Resting Ports</li>
        <li className="navigation-ports__item">Resting Ports</li>
      </ul>
    </div>
  );
};

export default SideBar;