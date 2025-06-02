import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import menuItems from '../config/menu';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-container">
        <button className="hamburger-btn" onClick={toggle}>
          ☰
        </button>
      </div>

      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={()=>{}} className="menu-item">
                <div className="menu-icon">{item.icon}</div>
                {isOpen && <span className="menu-label">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
