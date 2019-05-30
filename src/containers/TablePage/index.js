import React, { Component } from 'react';
import Header from '../../components/Header';
import './table.scss';
import PaginationBar from '../../components/PaginationBar';
import Table from '../../components/Table';

class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1, //current page no.
      usersPerPage: 5, // Max no of user per page
      upperPageBound: 9,
      lowerPageBound: 0,
      isPrevBtnActive: false,
      isNextBtnActive: true,
      pageBound: 9
    }
  }


  // ================================User Defined Methods ======================================


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

  // ==================================RENDER FUNCTION===========================================
  render() {
    //calculating Variables
    const { currentPage, usersPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
    const { users } = this.props;

    const allPages = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      allPages.push(i);
    }

    //Sorting logic


    // Logic for displaying current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsersArr = users.slice(indexOfFirstUser, indexOfLastUser);




    return (
      <section className="table-page">

        <Header />

        <section className="container">
          <section>
            <input type='text' placeholder="Search by first name" />
            <span>11-15 0f 50</span>
          </section>

          <Table displayData={currentUsersArr} />

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