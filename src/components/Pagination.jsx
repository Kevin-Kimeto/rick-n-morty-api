import React from 'react';

const Pagination = ({ prev, next, onPrevious, onNext }) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }

  return (
    <div className='flex flex-row gap-2'>
      {prev ? (
        <button className='border border-blue-500 w-16 mb-8' onClick={handlePrevious}>Prev</button>
      ) : null}  
      {next ? (
        <button className='border border-blue-500 w-16 mb-8' onClick={handleNext}>Next</button>
      ) : null}      
    </div>
  )
}

export default Pagination;