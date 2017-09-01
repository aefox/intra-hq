import React from 'react';
import { Link } from 'react-router-dom';

class CreateANewTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: '',
      indents: [],
      testType: this.getTestTypes(props)[0]
    };
  }

  updateTestType(e) {
    this.setState({ testType: e.target.value });
  }

  updateCandidateName(e) {
    this.setState({ candidateName: e.target.value });
  }

  getTestTypes(nextProps) {
    return Object.keys(nextProps.questions);
  }

  getQuestionsByTestType(_testType) {
    if (_testType !== undefined)
      return this.props.questions[_testType].questions;
    else {
      return;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setIndents(nextProps);
    this.setState({ testType: this.getTestTypes(nextProps)[0] });
  }
  componentWillMount() {
    this.setState({ testType: this.getTestTypes(this.props)[0] });
  }

  setIndents(nextProps) {
    var testTypes = this.getTestTypes(nextProps); // remove from here
    for (var i = 0; i < testTypes.length; i++) {
      this.state.indents.push(
        <option value={testTypes[i]} key={testTypes[i]}>
          {testTypes[i]}
        </option>
      );
    }
  }

  render() {
    console.log(this.props.questions);
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
              {this.state.indents}
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
