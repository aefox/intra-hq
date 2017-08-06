import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardNavBar = props =>
  <div className="dashboard-menu">
    <div className="dashboard-menu__item">
      <Link to={`${props.url}/new-dashboard`}>Create dashboard</Link>
    </div>
  </div>;

DashboardNavBar.propTypes = {
  url: PropTypes.string.isRequired
};

export default DashboardNavBar;
