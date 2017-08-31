import React from 'react';
import { v4 } from 'uuid';
import { questions } from '../../TestDefinition';

const Responses = ({ props, match }) => {
  let question = questions.filter(
    question => question.id === match.params.id
  )[0];
  return (
    <div>
      <ul>
        {question.responses.map(response =>
          <li key={v4()}>
            {response}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Responses;
