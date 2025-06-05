import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBook, updateBookStatus } from '../../redux/books/booksSlice';
import './Book.css';
import { useNavigate } from 'react-router-dom';


export default function Book(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
    // const [viewStatus, setviewStatus] = useState(false);
    const [filter, setFilter] = useState("all");


    const handleViewBtnClick = (e, id) => {
        e.preventDefault();
        // props.showViewModal();
        dispatch(selectBook(id));
        // dispatch(updateBookStatus(id));
        dispatch(updateBookStatus({
            id,
            viewStatus: true
        }));
        navigate('/viewbook');
    }

    const handleEditBtnClick = (e, id) => {
        e.preventDefault();
        props.showUpdateModal();
        dispatch(selectBook(id));
        dispatch(updateBookStatus({
            id,
            viewStatus: false
        }));
    }

    const filteredBooks = books.filter(book => {
        if (filter === "read") {
            return book.viewStatus === true;
        } if (filter === "unread") {
            return book.viewStatus === false;
        } else {
            return true;
        }
    });


    return (
        <div className='container'>
                <div className='subHeading'>
                    <h1>Books</h1>
                    <div>
                        <label>Filter: </label>
                        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="all">All</option>
                            <option value="read">Read</option>
                            <option value="unread">Unread</option>
                        </select>
                    </div>

                </div>
                <div className='tableWrapper'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className='sNo'>#</th>
                                <th scope="col" className='title'>Title</th>
                                <th scope="col" className='des'>Description</th>
                                <th scope="col" className='status'>Status</th>
                                <th scope="col" className='action'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {books.map((book, index) => (
                        <tr key={index + 1}>
                            <th >{index + 1}</th>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.viewStatus ? "Read" : "Unread"}</td>
                            <td>
                                <button onClick={(e) => handleViewBtnClick(e, index + 1)}>View</button>
                                <button onClick={(e) => handleEditBtnClick(e, index + 1)}>Edit</button>
                            </td>
                        </tr>
                    ))} */}

                        {!filteredBooks.length > 0 && 
                        <tr>
                            <td colSpan={5}>
                                <div className='addBookText'> No record found.You can add a book by using "Add Book" link in the top navigation.</div>
                            </td>
                        </tr>
                        }
                            {filteredBooks.map((book, index) => (
                                <tr key={book.id}>
                                    <th>{index + 1}</th>
                                    <td>{book.title}</td>
                                    <td>{book.description}</td>
                                    <td>{book.viewStatus ? "Read" : "Unread"}</td>
                                    <td>
                                        <div className='viewEditBtnWrap'>
                                            <button onClick={(e) => handleViewBtnClick(e, book.id)} title='View Book'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                            </svg></button>
                                            <button onClick={(e) => handleEditBtnClick(e, book.id)} title='Add Book'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

        </div>
    )
}
