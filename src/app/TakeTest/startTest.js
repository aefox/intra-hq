import React from 'react';
import { Link } from 'react-router-dom';

class StartTest extends React.Component {
  render() {
    return (
      <div>
        CandidateName: {this.props.location.candidateName}
        <br />
        TestType: {this.props.location.testType}
        <br />
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
