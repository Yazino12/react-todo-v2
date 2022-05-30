import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
  return (
    <div>
      <h1>hi there</h1>
      <ul>
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":slug" element={<SinglePage />} />
      </Routes>
    </div>
  );
};
export default About;