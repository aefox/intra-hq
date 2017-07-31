import React from 'react';
import { v4 } from 'uuid';
import { Link, Route } from 'react-router-dom';
import { questions } from '../../TestDefinition';
import Responses from '../Responses';

const ApprovedQuestions = ({ props, match }) => {
  const avg = rates => {
    if (rates.length == 0) {
      return 0;
    }
    var sum = rates.reduce(function(a, b) {
      return a + b;
    });
    return sum / rates.length;
  };

  return (
    <div>
      {questions
        .filter(
          question =>
            question.state === 'approved' &&
            question.category === match.params.questionCategory
        )
        .map(question =>
          <li key={v4()}>
            <Link to={`${match.url}/responses/${question.id}`}>
              {question.title}
            </Link>, {avg(question.rates)}, {question.numberOfAppearence},{' '}
            {question.numberOfRights}
          </li>
        )}

      <Route path={`${match.url}/responses/:id`} component={Responses} />
    </div>
  );
};

export default ApprovedQuestions;
