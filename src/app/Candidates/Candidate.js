import React from 'react';
import './styles.css';

const Candidate = ({ candidate, setCandidateId }) =>
  <div
    className="candidate-name"
    onClick={() => {
      setCandidateId(candidate.id);
    }}
  >
    {candidate.name}
  </div>;

export default Candidate;
