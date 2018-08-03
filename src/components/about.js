import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = (props) => {
  return (
    <div>
      <h1>This is me</h1>

      <h2>
        My equipment:
      </h2>
      <ul>
        <li>
          <FontAwesomeIcon icon="camera" />
          Canon 6D
        </li>
        <li>
          <FontAwesomeIcon icon="camera" />
          Canon M50
        </li>
      </ul>
    </div>
  );
};

export default About;
