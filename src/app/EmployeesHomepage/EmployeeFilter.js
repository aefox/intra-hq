import React from 'react';
import FilterDropdown from './FilterDropdown';

export class EmployeeFilter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filters: props.filters
    };

    this.filterByCriteria = this.filterByCriteria.bind(this);
  }

  filterByCriteria(criteria, valueToFilter) {
    this.props.filterByCriteria(criteria, valueToFilter);
  }

  render() {
    let filters = this.state.filters;
    return (
      <tr>
        <td>
          <input type="text" />
        </td>
        <td>
          <FilterDropdown
            elements={filters[0]}
            criteria="position"
            filterByCriteria={this.filterByCriteria}
          />
        </td>
        <td>
          <FilterDropdown
            elements={filters[1]}
            criteria="technology"
            filterByCriteria={this.filterByCriteria}
          />
        </td>
        <td>
          <FilterDropdown
            elements={filters[2]}
            criteria="project"
            filterByCriteria={this.filterByCriteria}
          />
        </td>
        <td>
          <FilterDropdown
            elements={filters[3]}
            criteria="manager"
            filterByCriteria={this.filterByCriteria}
          />
        </td>
      </tr>
    );
  }
}

export default EmployeeFilter;
