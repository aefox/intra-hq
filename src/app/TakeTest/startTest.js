import React from 'react';
import { Link } from 'react-router-dom';
import TakeTestHeader from './header';

class StartTest extends React.Component {
  render() {
    return (
      <div>
        <TakeTestHeader
          candidateName={this.props.location.candidateName}
          testType={this.props.location.testType}
        />
        <button>
          <Link
            to={{
              pathname: '/showQuestions',
              candidateName: this.props.location.candidateName,
              testType: this.props.location.testType,
              questions: this.props.location.questions
            }}
          >
            Start Test
          </Link>
        </button>
      </div>
    );
  }
}

export default StartTest;
