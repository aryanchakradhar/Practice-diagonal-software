import React from 'react'

export const Pagination = ({totalPages, currentPage, onPageChange}) => {
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);
  return (
    <div className='flex justify-center mt-3 items-center '>
        <button onClick={() => onPageChange(currentPage - 1)} disabled = {currentPage === 1} className=' bg-purple-900 text-white p-2 rounded-xl mr-1'>
        Prev
        </button>
        {pages.map((page) =>(
            <button className={`${currentPage === page ? " bg-purple-900 text-white" : "bg-white"} p-2 rounded-lg `} key={page} onClick={() => onPageChange(page)}>
                {page}
            </button>
        ))}
        <button onClick={() => onPageChange(currentPage + 1)} disabled = {currentPage === totalPages} className=' bg-purple-900 text-white p-2 rounded-xl ml-1'>
            Next
        </button>
        </div>
  );
};

export default Pagination;
