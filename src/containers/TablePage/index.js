import React, { Component } from 'react';
import Header from '../../components/Header/index'
import PaginationBar from '../../components/PaginationBar/index';
import Table from '../../components/Table/index';
import './tablePage.scss';

class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      //for Pagination
      currentPage: 1, //current page no.
      usersPerPage: 5, // Max no of user per page
      upperPageBound: 9,
      lowerPageBound: 0,
      isPrevBtnActive: false,
      isNextBtnActive: true,
      pageBound: 9,
      //for Sorting
      sort: {
        column: null,
        direction: 'desc',
      }
    }
  }
  // move to display page
  handleDisplay = (id) => {
    this.props.history.push(`/user/${id}`)
  }
  //==============================User Defined Function for Searching==============================
  handleInput = (e) => {
    this.setState({ input: e.target.value })
  }

  filterSearch = (users) => users.filter(obj => obj.first_name.toLowerCase().includes(this.state.input.toLowerCase()));


  // ================================User Defined Methods For Pagination ======================================


  //handle if pageno is clickked padination row
  handlePageClick = (number) => {
    this.setState({
      currentPage: +number
    }, () => {
      this.setPrevAndNextBtnActiveness();
    });
  }

  //Pages Increment handle Click
  pagesIncBtn = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
      currentPage: this.state.upperPageBound + 1
    }, () => {
      this.setPrevAndNextBtnActiveness();
    });
  }

  //Pages Decrement handle Click
  pagesDecBtn = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
      currentPage: this.state.upperPageBound - this.state.pageBound
    }, () => {
      this.setPrevAndNextBtnActiveness();
    });
  }



  //Prev Button handle Click
  prevClick = () => {
    if (!this.state.isPrevBtnActive) return;

    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
      });
    }
    this.setState({ currentPage: this.state.currentPage - 1 }, () => {
      this.setPrevAndNextBtnActiveness();
    });

  }
  //next Button handle Click
  nextClick = () => {
    if (!this.state.isNextBtnActive) return;

    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
      });
    }
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      this.setPrevAndNextBtnActiveness();
    });

  }

  //set prev and next button activeness
  setPrevAndNextBtnActiveness = () => {
    const { users } = this.props
    const { currentPage, usersPerPage } = this.state;
    let totalPage = Math.ceil(users.length / usersPerPage);

    let newPrevState = false, newNextState = false;

    if (totalPage === currentPage && totalPage > 1) newPrevState = true;

    else if (currentPage === 1 && totalPage > 1) newNextState = true;

    else if (totalPage > 1) {
      newPrevState = true;
      newNextState = true;
    }

    this.setState({
      isPrevBtnActive: newPrevState,
      isNextBtnActive: newNextState,
    })
  }

  //===================================User Defined Methods For Sorting==========================

  onSort = (column) => {
    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    this.setState({
      sort: {
        column,
        direction,
      }
    });
  };

  userSort = (users) => {
    const { column, direction } = this.state.sort;
    const sortedData = users.sort((a, b) => {
      if (typeof a[column] === 'string') {
        let wordA = a[column].toUpperCase(); // ignore upper and lowercase
        let wordB = b[column].toUpperCase(); // ignore upper and lowercase

        if (column === 'web') {
          wordA = wordA.split('.')[1];  // getting Domain Out of URL
          wordB = wordB.split('.')[1];  // getting Domain Out of URL
        }

        if (wordA < wordB) {
          return -1;
        }

        if (wordA > wordB) {
          return 1;
        }
        // names must be equal
        return 0;
      } else {
        // else it is a nomber acc to input data reciving
        return a[column] - b[column];
      }
    });

    if (direction === 'desc' && column) {
      sortedData.reverse();
    }

    return sortedData
  }

  setArrow = (column) => {
    let className = 'sort-direction';

    if (this.state.sort.column === column) {
      className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
    }

    return className;
  };


  // ==================================RENDER FUNCTION===========================================
  render() {
    //calculating Variables
    const { currentPage, usersPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
    const { users } = this.props;

    //filter Search
    const serchedUsers = this.filterSearch(users)

    //Sorting logic
    const sortedUsers = this.userSort(serchedUsers)

    // Logic for displaying current users
    const allPages = [];
    for (let i = 1; i <= Math.ceil(sortedUsers.length / usersPerPage); i++) {
      allPages.push(i);
    }
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsersArr = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);




    return (
      <section className="table-page">

        <Header icon='fa fa-bars' iconFn={() => { }} />

        <section className="table-wrapper">
          <section>
            <input type='text' placeholder="Search by first name" value={this.state.input} onChange={this.handleInput} />
            <span>{` ${indexOfFirstUser + 1}-${indexOfLastUser} of ${users.length}`}</span>
          </section>

          <Table displayData={currentUsersArr} onSort={this.onSort} setArrow={this.setArrow} handleDisplay={this.handleDisplay} />

          <PaginationBar
            handlePageClick={this.handlePageClick}
            pagesIncBtn={this.pagesIncBtn}
            pagesDecBtn={this.pagesDecBtn}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            passedState={{ isPrevBtnActive, isNextBtnActive, lowerPageBound, upperPageBound, allPages, currentPage }} />

        </section>
      </section >
    );
  }
}

export default TablePage;