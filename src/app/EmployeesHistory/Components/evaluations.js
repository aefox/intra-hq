import React from 'react';
import EvaluationItemsList from './EvaluationItemsList';

const Evaluations = props => {
  return (
    <div>
      <strong>Evaluations</strong>
      <EvaluationItemsList items={props.evaluations} />
    </div>
  );
};

export default Evaluations;
