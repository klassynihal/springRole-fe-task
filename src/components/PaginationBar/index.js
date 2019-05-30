import React from 'react';
import './paginationBar.scss'

const PaginationBar = props => {
  const { isPrevBtnActive, isNextBtnActive, lowerPageBound, upperPageBound, allPages, currentPage } = props.passedState;
  return (
    <section className="pagination">
      <div className="top-pagination">
        <button disabled={!isPrevBtnActive} onClick={props.prevClick}>Prev</button>
        <button disabled={!isNextBtnActive} onClick={props.nextClick}>Next</button>
      </div>
      <div className="bottom-pagination">
        {/* page Decrement */}
        {(lowerPageBound > 1) ? <button onClick={props.pagesDecBtn}> {'<<'} </button> : null}


        {allPages.map(number => {
          return ((number < upperPageBound + 1) && number > lowerPageBound) ? <button key={number} className={(currentPage === number) ? 'button-primary' : ''} onClick={() => props.handlePageClick(number)}>{number}</button> : null
        })}

        {(upperPageBound < allPages.length) ? <button onClick={props.pagesIncBtn}> {'>>'} </button> : null}



      </div>
    </section>
  );
};



export default PaginationBar;