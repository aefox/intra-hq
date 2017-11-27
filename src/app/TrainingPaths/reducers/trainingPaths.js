const trainingPaths = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_PATHS':
      return [...action.paths];
    case 'ADD_PATH':
      return [...state, action.path];
    case 'DELETE_PATH':
      return state.filter(path => path.id !== action.deletedPathId);
    default:
      return state;
  }
};

export default trainingPaths;
