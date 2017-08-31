// import React, { PropTypes } from 'react';
// import Img from 'react-image';

// export class Pagination extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             items: props.items,
//             currentPages: props.currentPages,
//             numberOfItemsPerPage: props.numberOfItemsPerPage,
//             typeOfItems: props.typeOfItems
//         };
//         this.changeCurrentPageInChild = this.changeCurrentPageInChild.bind(this);
//         this.changeNumberOfElements = this.changeNumberOfElements.bind(this);
//     }

//     componentWillReceiveProps(props) {
//         this.setState({
//             items: props.items,
//             currentPages: props.currentPages,
//             numberOfItemsPerPage: props.numberOfItemsPerPage,
//             typeOfItems: props.typeOfItems
//         });
//     }

//     changeCurrentPageInChild(current) {
//         this.props.changeCurrentPage(current);
//     }

//     updateCurrentPageOnClick(current) {
//         let typeOfItems = this.state.typeOfItems;
//         if (typeOfItems === "courses") {
//             this.setState({ currentPageCourses: current });
//             this.changeCurrentPageInChild(current);
//         } else {
//             this.setState({ currentPageCourses: current });
//             this.changeCurrentPageInChild(current);
//         }

//     }

//     goToPrevPage(current, totalNumberOfPages) {
//         if (current > 1) {
//             this.changeCurrentPageInChild(current - 1);
//         }

//     }

//     goToNextPage(current, totalNumberOfPages) {
//         if (current < totalNumberOfPages) {
//             this.changeCurrentPageInChild(current + 1);
//         }
//     }

//     goToExtremePage(current) {
//         this.changeCurrentPageInChild(current);
//     }

//     changeNumberOfElements() {
//         this.props.changeNumberOfElements(JSON.parse(document.querySelector('#lang').value));
//     }

//     render() {
//         const items = this.state.items;
//         let currentPage;
//         currentPage = JSON.parse(localStorage.getItem("currentPage"));
//         let numberOfCoursesPerPage = this.state.numberOfItemsPerPage;
//         let imageLeft = require('./images/left.png');
//         let imageRight = require('./images/right.png');
//         let imageFirstLeft = require('./images/leftleft.png');
//         let imageLastRight = require('./images/rightright.jpg');
//         const totalNumberOfPages = Math.ceil(items.length / numberOfCoursesPerPage);
//         const goToPrevPage = this.goToPrevPage.bind(this, currentPage, totalNumberOfPages);
//         const goToNextPage = this.goToNextPage.bind(this, currentPage, totalNumberOfPages);
//         const goToFirstPage = this.goToExtremePage.bind(this, 1);
//         const goToLastPage = this.goToExtremePage.bind(this, totalNumberOfPages);
//         const changeNumberOfElements = this.changeNumberOfElements.bind(this);
//         return (
//             <div>
//                 <select id="lang" style={{ float: "left" }} onChange={this.changeNumberOfElements} defaultValue={2} >
//                     <option value={2}> 2 / page </option>
//                     <option value={3}> 3 / page </option>
//                     <option value={4}> 4 / page </option>
//                 </select>
//                 <a onClick={goToLastPage}>
//                     <img src={imageLastRight} style={{ width: "20px", height: "20px", float: "right", margin: "5px" }} />
//                 </a>
//                 <a onClick={goToNextPage}>
//                     <img src={imageRight} style={{ width: "20px", height: "20px", float: "right", margin: "5px" }} />
//                 </a>
//                 <div style={{ float: "right", marginTop: "5px" }}>
//                     {items.map((item, index) => {
//                         const current = index / numberOfCoursesPerPage + 1;
//                         const updateCurrentPageOnClick = this.updateCurrentPageOnClick.bind(this, current);

//                         if (index % numberOfCoursesPerPage === 0) {
//                             if ((index / numberOfCoursesPerPage + 1) === currentPage) {
//                                 return <a onClick={updateCurrentPageOnClick} style={{ "color": "orange" }}> {(index / numberOfCoursesPerPage + 1)} </a>;
//                             }
//                             return <a onClick={updateCurrentPageOnClick} activeClassName="active"> {(index / numberOfCoursesPerPage + 1)} </a>;
//                         }
//                     })
//                     }
//                 </div>
//                 <a onClick={goToPrevPage}>
//                     <img src={imageLeft} style={{ width: "20px", height: "20px", float: "right", margin: "5px" }} />
//                 </a>
//                 <a onClick={goToFirstPage}>
//                     <img src={imageFirstLeft} style={{ width: "20px", height: "20px", float: "right", margin: "5px" }} />
//                 </a>
//                 <br />
//             </div>
//         );
//     }
// }

// export default Pagination;
