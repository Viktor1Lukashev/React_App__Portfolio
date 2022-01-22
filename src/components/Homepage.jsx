import React from 'react';
import './Homepage.css';
import { Link, Route, Routes } from 'react-router-dom';
import AnastasiaPage from './AnastasiaPage.jsx';
import ViktorPage from './ViktorPage.jsx';
function Homepage() {
  return (
    <>
      <div className="header">
        <div className="container">
          <ul className="menu">
            <li>
              <Link to="/Anastasia">Анастасия</Link>
            </li>
            <li>
              <Link to="/Viktor">Виктор</Link>
            </li>
            <li>
              <Link to="/Projects">Реализованные проекты</Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/Anastasia" element={<AnastasiaPage />} />
        <Route path="/Viktor" element={<ViktorPage />} />
      </Routes>
    </>
  );
}
export default Homepage;
