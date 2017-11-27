import React from 'react';
import './styles.css';

const Details = ({ candidate }) =>
  <div>
    <div>
      {candidate.name}
    </div>
    <div>
      {candidate.phoneNumber}
    </div>
    <div>
      {candidate.yearsExperience}
    </div>
  </div>;

export default Details;
