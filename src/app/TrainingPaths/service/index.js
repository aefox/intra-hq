const BASE_URL = 'http://localhost:9000';

const fetchJson = (url, method) =>
  fetch(url, {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());

const getPromise = url => fetchJson(url, 'GET');

const deletePromise = url => fetchJson(url, 'DELETE');

const postPromise = (url, data) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());

export const getTrainingPaths = () => getPromise(`${BASE_URL}/paths`);

export const deletePath = id => deletePromise(`${BASE_URL}/paths/${id}`);

export const addTrainingPath = path => postPromise(`${BASE_URL}/paths`, path);
