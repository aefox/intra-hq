import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const DashboardList = props =>
  <div>
    <div className="dashboard-table">
      <div className="dashboard-column name-column">
        <div className="dashboard-header">Dashboard</div>
        {props.dashboards.map(dashboard =>
          <div key={dashboard.id} className="dashboard-cell">
            <Link
              className="dashboard-list__namelink"
              to={`${props.match.url}/view/${dashboard.id}`}
            >
              {dashboard.name}
            </Link>
          </div>
        )}
      </div>
      <div className="dashboard-column">
        <div className="dashboard-header">Actions</div>
        {props.dashboards.map(dashboard =>
          <div key={dashboard.id} className="dashboard-cell">
            <Link
              className="dashboard-list__editlink"
              to={`${props.match.url}/edit/${dashboard.id}`}
            >
              Edit
            </Link>
          </div>
        )}
      </div>
    </div>

    {props.dashboards.length === 0 &&
      <span>There are no defined dashboards !</span>}
  </div>;

DashboardList.propTypes = {
  dashboards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default DashboardList;
