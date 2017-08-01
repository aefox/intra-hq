import React, { PropTypes } from 'react';

export class FilterDropdown extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      elements: props.elements,
      criteria: props.criteria,
      filterByCriteria: props.filterByCriteria
    };
    this.filterByCriteria = this.filterByCriteria.bind(this);
  }

  filterByCriteria(e) {
    console.log(e.target.value);
    this.props.filterByCriteria(this.state.criteria, e.target.value);
  }

  render() {
    let criteria = this.state.criteria;
    let elements = this.state.elements;
    return (
      <select onChange={this.filterByCriteria}>
        <option value="empty">
          Filter by {criteria}
        </option>
        {elements.map(filter =>
          <option value={filter}>
            {filter}
          </option>
        )}
      </select>
    );
  }
}

export default FilterDropdown;
