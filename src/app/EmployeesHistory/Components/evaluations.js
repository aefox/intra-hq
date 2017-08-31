import React from 'react';
import EvaluationItemsList from './evaluationItemsList';
import EmployeeHistoryProvider from '../employeeHistoryProvider';

const Evaluations = props => {
  const evaluations = EmployeeHistoryProvider.getEvaluations();

  return (
    <div>
      <strong>Evaluations</strong>
      <EvaluationItemsList items={evaluations} />
    </div>
  );
};

export default Evaluations;
