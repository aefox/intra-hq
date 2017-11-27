import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Candidates from './Candidates';
import EmployeesHistory from './EmployeesHistory';
import EmployeesHomepage from './EmployeesHomepage';
import Positions from './Positions';
import RecruitmentDashboard from './RecruitmentDashboard';
import TakeTest from './TakeTest';
import TrainingPaths from './TrainingPaths';
import AddTrainingPath from './TrainingPaths/AddTrainingPath';

const Routes = () =>
  <div>
    <Route path={'/candidates'} component={Candidates} />
    <Route path={'/employees-history'} component={EmployeesHistory} />
    <Route path={'/employees-homepage'} component={EmployeesHomepage} />
    <Route path={'/positions'} component={Positions} />
    <Route path={'/recruitment-dashboard'} component={RecruitmentDashboard} />
    <Route path={'/training-paths'} exact component={TrainingPaths} />
    <Route path={'/training-paths/add-path'} exact component={AddTrainingPath} />
    <Route path={'/take-test'} component={TakeTest} />
    <Route path={'/'} exact component={App} />
  </div>;

export default Routes;
