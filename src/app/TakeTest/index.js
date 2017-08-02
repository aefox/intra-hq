import React from 'react';
import CreateANewTest from './createANewTest';

class TakeTestHome extends React.Component {
  render() {
    return (
      <div>
        <CreateANewTest questions={QUESTIONS_BY_TEST_TYPES} />
      </div>
    );
  }
}

const QUESTIONS_BY_TEST_TYPES = new Map([
  [
    'Java-Junior',
    [
      { question: 'jjQuestion0', answer: 'jjAnswer0' },
      { question: 'jjQuestion1', answer: 'jjAnswer1' },
      { question: 'jjQuestion2', answer: 'jjAnswer2' },
      { question: 'jjQuestion3', answer: 'jjAnswer3' }
    ]
  ],
  [
    'Java-Medior',
    [
      { question: 'jmQuestion0', answer: 'jmAnswer0' },
      { question: 'jmQuestion1', answer: 'jmAnswer1' },
      { question: 'jmQuestion2', answer: 'jmAnswer2' },
      { question: 'jmQuestion3', answer: 'jmAnswer3' }
    ]
  ],
  [
    'Java-Senior',
    [
      { question: 'jsQuestion0', answer: 'jsAnswer0' },
      { question: 'jsQuestion1', answer: 'jsAnswer1' },
      { question: 'jsQuestion2', answer: 'jsAnswer2' },
      { question: 'jsQuestion3', answer: 'jsAnswer3' }
    ]
  ]
]);

export default TakeTestHome;
