import React from 'react';
import { v4 } from 'uuid';
import { Link, Route } from 'react-router-dom';
import Responses from '../Responses';
import { questions } from '../../TestDefinition';

const ReviewQuestions = ({ props, match }) => {
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
      <div>
        {questions
          .filter(
            question =>
              question.state === 'review' &&
              question.category === match.params.questionCategory
          )
          .map(question =>
            <li key={v4()}>
              <Link to={`${match.url}/responses/${question.id}`}>
                {question.title}
              </Link>, {question.feedbacks.length}, {avg(question.rates)}
            </li>
          )}
      </div>
      <Route path={`${match.url}/responses/:id`} component={Responses} />
    </div>
  );
};

export default ReviewQuestions;
