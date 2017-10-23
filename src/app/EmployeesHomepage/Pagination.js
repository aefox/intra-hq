import React from 'react';
import './styles/pagination.css';

export class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: props.items,
      currentPage: props.currentPage,
      numberOfItemsPerPage: props.numberOfItemsPerPage,
      typeOfItems: props.typeOfItems
    };
    this.changeCurrentPageInChild = this.changeCurrentPageInChild.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      items: props.items,
      currentPage: props.currentPage,
      numberOfItemsPerPage: props.numberOfItemsPerPage,
      typeOfItems: props.typeOfItems
    });
  }

  changeCurrentPageInChild(current) {
    this.props.changeCurrentPage(current);
  }

  updateCurrentPageOnClick(current) {
    let typeOfItems = this.state.typeOfItems;
    if (typeOfItems === 'courses') {
      this.setState({ currentPageCourses: current });
      this.changeCurrentPageInChild(current);
    } else {
      this.setState({ currentPageCourses: current });
      this.changeCurrentPageInChild(current);
    }
  }

  goToPrevPage(current, totalNumberOfPages) {
    if (current > 1) {
      this.changeCurrentPageInChild(current - 1);
    }
  }

  goToNextPage(current, totalNumberOfPages) {
    if (current < totalNumberOfPages) {
      this.changeCurrentPageInChild(current + 1);
    }
  }

  goToExtremePage(current) {
    this.changeCurrentPageInChild(current);
  }

  render() {
    const items = this.state.items;
    let currentPage;
    currentPage = this.state.currentPage;
    let numberOfItemsPerPage = this.state.numberOfItemsPerPage;
    let imageLeft = require('./images/left.png');
    let imageRight = require('./images/right.png');
    let imageFirstLeft = require('./images/leftleft.png');
    let imageLastRight = require('./images/rightright.jpg');
    const totalNumberOfPages = Math.ceil(items.length / numberOfItemsPerPage);
    const goToPrevPage = this.goToPrevPage.bind(
      this,
      currentPage,
      totalNumberOfPages
    );
    const goToNextPage = this.goToNextPage.bind(
      this,
      currentPage,
      totalNumberOfPages
    );
    const goToFirstPage = this.goToExtremePage.bind(this, 1);
    const goToLastPage = this.goToExtremePage.bind(this, totalNumberOfPages);
    return (
      <div>
        <a onClick={goToLastPage}>
          <img
            src={imageLastRight}
            className="paginationArrows"
            style={{
              width: '20px',
              height: '20px',
              float: 'right',
              margin: '5px'
            }}
            alt=""
          />
        </a>
        <a onClick={goToNextPage}>
          <img
            src={imageRight}
            className="paginationArrows"
            style={{
              width: '20px',
              height: '20px',
              float: 'right',
              margin: '5px'
            }}
            alt=""
          />
        </a>
        <div style={{ float: 'right', marginTop: '5px' }}>
          {this.props.currentPage}
        </div>
        <a onClick={goToPrevPage}>
          <img
            src={imageLeft}
            className="paginationArrows"
            style={{
              width: '20px',
              height: '20px',
              float: 'right',
              margin: '5px'
            }}
            alt=""
          />
        </a>
        <a onClick={goToFirstPage}>
          <img
            src={imageFirstLeft}
            className="paginationArrows"
            style={{
              width: '20px',
              height: '20px',
              float: 'right',
              margin: '5px'
            }}
            alt=""
          />
        </a>
        <br />
      </div>
    );
  }
}

export default Pagination;
