import React, { useState } from 'react';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const next = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  }

  const prev = () => {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  }

  const jump = (page) => {
    const pageNumber = page;
    setCurrentPage(pageNumber);
    console.log(pageNumber);
    
  }

  return { currentPage, next, prev, jump }
}

export default usePagination;