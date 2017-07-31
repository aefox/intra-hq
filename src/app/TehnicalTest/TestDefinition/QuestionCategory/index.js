import React from 'react';
import { Link, Route } from 'react-router-dom';
import ApprovedQuestions from '../ApprovedQuestions';
import ReviewQuestions from '../ReviewQuestions';

const QuestionCategory = ({ props, match }) =>
  <div>
    <div>
      <Link to={`${match.url}/review`}>To Review</Link>
      <Link to={`${match.url}/approved`}>Approved</Link>
    </div>
    <div>
      <Route
        path={'/test-definition/:questionCategory/review'}
        component={ReviewQuestions}
      />
      <Route
        path={'/test-definition/:questionCategory/approved'}
        component={ApprovedQuestions}
      />
    </div>
  </div>;

export default QuestionCategory;
