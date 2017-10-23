import { combineReducers } from 'redux';

import currentPages from './paginationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const currentPageCourses = currentPages[0];
const currentPageAuthors = currentPages[1];

const rootReducer = combineReducers({});

export default rootReducer;
