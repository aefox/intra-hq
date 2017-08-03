import React from 'react';

class Question extends React.Component {
  updateProvidedAnswer(e) {
    this.props.useProvidedAnswer(e.target.value);
  }

  render() {
    return (
      <div>
        {this.props.question}
        <input
          type="text"
          value={this.props.answer}
          onChange={this.updateProvidedAnswer.bind(this)}
        />
      </div>
    );
  }
}

export default Question;
