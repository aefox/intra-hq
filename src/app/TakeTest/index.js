import React from 'react';
import CreateANewTest from './createANewTest';

class TakeTestHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentWillMount() {
    fetch('http://localhost:5006/testTypes')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ questions: data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="container-fluid col-md-12">
        <CreateANewTest questions={this.state.questions} />
      </div>
    );
  }
}

export default TakeTestHome;
