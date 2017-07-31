import React from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionCategory from './QuestionCategory';

export const questions = [
  {
    id: 1,
    state: 'review',
    category: 'jj',
    title: 'q1',
    feedbacks: [],
    rates: [2.5, 3],
    responses: ['rasp11', 'rasp12', 'rasp13']
  },
  {
    id: 2,
    state: 'approved',
    category: 'jj',
    title: 'q2',
    feedbacks: [],
    rates: [],
    numberOfAppearence: 2,
    numberOfRights: 1,
    responses: ['rasp21', 'rasp22', 'rasp23']
  },
  {
    id: 3,
    state: 'review',
    category: 'jj',
    title: 'q3',
    feedbacks: [],
    rates: [],
    responses: ['rasp31', 'rasp32', 'rasp33']
  },
  {
    id: 4,
    state: 'review',
    category: 'js',
    title: 'q4',
    feedbacks: [],
    rates: [],
    responses: ['rasp41', 'rasp42', 'rasp43']
  }
];

const TestDefinition = ({ props, match }) => {
  const filterByCategory = category => {
    return questions.filter(question => question.category === category);
  };

  const getTotalNumberOfQuestionsByCategory = category => {
    return filterByCategory(category).length;
  };

  const getTotalNumberOfQuestionsByCategoryAndState = (category, state) => {
    return filterByCategory(category).filter(
      question => question.state === state
    ).length;
  };

  const getCategoryDetails = category => {
    return `${getTotalNumberOfQuestionsByCategory(
      category
    )} | ${getTotalNumberOfQuestionsByCategoryAndState(
      category,
      'review'
    )} | ${getTotalNumberOfQuestionsByCategoryAndState(category, 'approved')}`;
  };

  return (
    <div>
      <div>
        <Link to={`${match.url}/jj/review`}>Java Junior</Link>{' '}
        {getCategoryDetails('jj')} <br />
        <Link to={`${match.url}/jm/review`}>Java Medior</Link>{' '}
        {getCategoryDetails('jm')} <br />
        <Link to={`${match.url}/js/review`}>Java Senior</Link>{' '}
        {getCategoryDetails('js')} <br />
        <Link to={`${match.url}/nj/review`}>.Net Junior</Link>{' '}
        {getCategoryDetails('nj')} <br />
        <Link to={`${match.url}/nm/review`}>.Net Medior</Link>{' '}
        {getCategoryDetails('nm')} <br />
        <Link to={`${match.url}/ns/review`}>.Net Senior</Link>{' '}
        {getCategoryDetails('ns')} <br />
      </div>
      <Route
        path={`${match.url}/:questionCategory`}
        component={QuestionCategory}
      />
    </div>
  );
};

export default TestDefinition;
