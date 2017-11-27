import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class CreateANewTest extends React.Component {
  state = {
    candidateName: '',
    testTypes: [],
    selectedTestType: ''
  };

  updateSelectedTestType = e => {
    this.setState({ selectedTestType: e.target.value });
  };

  updateCandidateName = e => {
    this.setState({ candidateName: e.target.value });
  };

  getQuestionsByTestType = () => {
    const selectedType = this.state.selectedTestType;
    return selectedType ? this.props.questions[selectedType].questions : null;
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ testTypes: Object.keys(nextProps.questions) });
    this.setState({ selectedTestType: Object.keys(nextProps.questions)[0] });
  }

  setTestTypeOptions = () => {
    const testTypes = this.state.testTypes;
    const options = [];
    for (var i = 0; i < testTypes.length; i++) {
      options.push(
        <option value={testTypes[i]} key={testTypes[i]}>
          {testTypes[i]}
        </option>
      );
    }
    return options;
  };

  render() {
    return (
      <div className="container-fluid col-md-12">
        <div className="row">
          <div className="col-md-8 col-offset-2">
            <label>Write A candidate Name:</label>
            <input
              type="text"
              placeholder="Candidate Name"
              value={this.state.candidateName}
              onChange={this.updateCandidateName}
            />
          </div>
          <div className=" row col-md-8 col-offset-2">
            <label>Select candidate skill test level: </label>
            <select onChange={this.updateSelectedTestType}>
              {this.setTestTypeOptions()}
            </select>
          </div>
        </div>
        <button>
          <Link
            to={{
              pathname: '/startTest',
              candidateName: this.state.candidateName,
              testType: this.state.selectedTestType,
              questions: this.getQuestionsByTestType()
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
