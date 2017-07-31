import React from 'react';

const EvaluationItemsList = props => {
  const evaluationItems = props.items.map((item, index) => {
    return (
      <li key={index}>
        <i>{item.evaluationDate}</i>: {item.feedback}
      </li>
    );
  });
  return (
    <ul>
      {evaluationItems}
    </ul>
  );
};

export default EvaluationItemsList;
