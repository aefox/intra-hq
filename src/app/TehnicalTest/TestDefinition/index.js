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

class TestDefinition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  filterByCategory = category => {
    return this.state.questions.filter(
      question => question.category === category
    );
  };

  getTotalNumberOfQuestionsByCategory = category => {
    return this.filterByCategory(category).length;
  };

  getTotalNumberOfQuestionsByCategoryAndState = (category, state) => {
    return this.filterByCategory(category).filter(
      question => question.state === state
    ).length;
  };

  getCategoryDetails = category => {
    return `${this.getTotalNumberOfQuestionsByCategory(
      category
    )} | ${this.getTotalNumberOfQuestionsByCategoryAndState(
      category,
      'review'
    )} | ${this.getTotalNumberOfQuestionsByCategoryAndState(
      category,
      'approved'
    )}`;
  };

  componentWillMount() {
    let _this = this;
    fetch('http://localhost:3001/questions').then(function(response) {
      response.json().then(function(data) {
        let questions = data;
        _this.setState({ questions });
      });
    });
  }
  render() {
    return (
      <div>
        <div>
          <Link to={`${this.props.match.url}/jj`}>Java Junior</Link>{' '}
          {this.getCategoryDetails('jj')} <br />
          <Link to={`${this.props.match.url}/jm`}>Java Medior</Link>{' '}
          {this.getCategoryDetails('jm')} <br />
          <Link to={`${this.props.match.url}/js`}>Java Senior</Link>{' '}
          {this.getCategoryDetails('js')} <br />
          <Link to={`${this.props.match.url}/nj`}>.Net Junior</Link>{' '}
          {this.getCategoryDetails('nj')} <br />
          <Link to={`${this.props.match.url}/nm`}>.Net Medior</Link>{' '}
          {this.getCategoryDetails('nm')} <br />
          <Link to={`${this.props.match.url}/ns`}>.Net Senior</Link>{' '}
          {this.getCategoryDetails('ns')} <br />
        </div>
        <Route
          path={`${this.props.match.url}/:questionCategory`}
          component={QuestionCategory}
        />
      </div>
    );
  }
}

export default TestDefinition;
