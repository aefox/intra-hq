export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const UPDATE_CANDIDATE_NAME = 'UPDATE_CANDIDATE_NAME';

export function fetchQuestions(data) {
  return { type: FETCH_QUESTIONS, data };
}

export function updateCandidateName(candidateName) {
  return { type: UPDATE_CANDIDATE_NAME, candidateName };
}
