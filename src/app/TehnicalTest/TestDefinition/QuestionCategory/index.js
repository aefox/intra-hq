import React from 'react';
import { Link, Route } from 'react-router-dom';
import ApprovedQuestions from '../ApprovedQuestions';
import ReviewQuestions from '../ReviewQuestions';

class QuestionCategory extends React.Component {
  constructor(props) {
    super(props);
    console.log('call constructor qc');
  }

  componentWillReceiveProps() {
    console.log('aaa');
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <div>
          <Link to={`${match.url}/review`}>To Review</Link>${match.url}
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
      </div>
    );
  }
}

export default QuestionCategory;
