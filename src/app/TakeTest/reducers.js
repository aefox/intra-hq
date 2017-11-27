import React from 'react';
import ReactDOM from 'react-dom';
import { FETCH_QUESTIONS, UPDATE_CANDIDATE_NAME } from './actions';

export default function TestApp(state = [], action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.data;
    case UPDATE_CANDIDATE_NAME:
      return action.candidateName;
    default:
      return state;
  }
}
