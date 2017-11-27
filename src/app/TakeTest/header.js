import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        CandidateName: {this.props.candidateName}
        <br />
        TestType: {this.props.testType}
        <br />
      </div>
    );
  }
}

export default Header;
