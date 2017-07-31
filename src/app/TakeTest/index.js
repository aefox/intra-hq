import React from 'react';
import { Link } from 'react-router-dom';

class CreateANewTest extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      candidateName: 'this is the state text',
      testType: TEST_TYPES[0].name
    };
  }

  selectTestType(e) {
    this.setState({ testType: e.target.value });
  }

  createANewTestSubmit() {
    console.log(this.state.candidateName + '@' + this.state.testType);

    localStorage.setItem('candidateName', this.state.candidateName);
    localStorage.setItem('testType', this.state.testType);
    this.props.history.push('startTest/');
  }

  updateCandidateName(e) {
    this.setState({ candidateName: e.target.value });
  }

  render() {
    var indents = [];
    for (var i = 0; i < TEST_TYPES.length; i++) {
      indents.push(
        <option value={TEST_TYPES[i].name} key={TEST_TYPES[i].name}>
          {TEST_TYPES[i].name}
        </option>
      );
    }

    return (
      <div>
        <input
          type="text"
          placeholder="Candidate Name"
          value={this.props.candidateName}
          onChange={this.updateCandidateName.bind(this)}
        />
        <div>
          <select onChange={this.selectTestType.bind(this)}>
            {indents}
          </select>
        </div>
        <Link
          to="#"
          className="App-link"
          onClick={this.createANewTestSubmit.bind(this)}
        >
          Create a New Test
        </Link>
      </div>
    );
  }
}

const TEST_TYPES = [
  { name: 'Java-Junior' },
  { name: 'Java-Medior' },
  { name: 'Java-Senior' }
];

export default CreateANewTest;
