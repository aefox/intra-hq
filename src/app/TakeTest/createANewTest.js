import React from 'react';
import { Link } from 'react-router-dom';

class CreateANewTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: '',
      testType: this.getTestTypes()[0]
    };
  }

  updateTestType(e) {
    this.setState({ testType: e.target.value });
  }

  updateCandidateName(e) {
    this.setState({ candidateName: e.target.value });
  }

  getTestTypes() {
    return Object.keys(this.props.questions.testTypes);
  }

  getQuestionsByTestType(_testType) {
    return this.props.questions.testTypes[_testType].questions;
  }

  render() {
    var testTypes = this.getTestTypes();
    var indents = [];
    for (var i = 0; i < testTypes.length; i++) {
      indents.push(
        <option value={testTypes[i]} key={testTypes[i]}>
          {testTypes[i]}
        </option>
      );
    }

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Candidate Name"
            value={this.props.candidateName}
            onChange={this.updateCandidateName.bind(this)}
          />
          <div>
            <select onChange={this.updateTestType.bind(this)}>
              {indents}
            </select>
          </div>
        </div>
        <button>
          <Link
            to={{
              pathname: '/startTest',
              candidateName: this.state.candidateName,
              testType: this.state.testType,
              questions: this.getQuestionsByTestType(this.state.testType)
            }}
          >
            Create a New Test
          </Link>
        </button>
      </div>
    );
  }
}

export default CreateANewTest;
