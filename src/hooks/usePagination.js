import React, { useState } from 'react';

function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);

  function next() {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  }

  function prev() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  }

  function jump(page) {
    const pageNumber = page;
    setCurrentPage(pageNumber);
    console.log(pageNumber);
    
  }

  return { currentPage, next, prev, jump }
}

export default usePagination;