import React from 'react'

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentBlog }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <>
            <div className="paginations">
            <ul className="d-flex flex-wrap justify-content-center">
                {
                    pageNumbers.map(number => (
                        <li className="d-none d-sm-block" key={number}>
                            <a href="#" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
            </div>
            
        </>
    );
};

export default Pagination