import React, { useState } from 'react';
import './Addbook.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';
import { useNavigate } from 'react-router-dom';

export default function Addbook(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [viewStatus] = useState(false);


    const dispatch = useDispatch();
    // const books = useSelector((state) => state.books.books);

    const handleAddBook = (e) => {
        e.preventDefault();
        if (!title || !description) {
            return;
        } else {
            dispatch(addBook({
                title,
                description,
                viewStatus
            }));
            setTitle('');
            setDescription('');
            navigate('/');
            props.handleShoWAlert("success","The book has been added to your library");
        }
    };

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionOnChange = (e) => {
        setDescription(e.target.value);
    }

    const isDisabled = !title || !description;

    return (
        <div className='container addBookWrap'>
            <h2>Add Book</h2>
            <div className='formWrap'>
                <form>
                    <div className='form-group'>
                        <input className='form-control' value={title} onChange={handleTitleOnChange} placeholder='Enter Title' />
                        {!title && <p className='requiredMsg'>Title is required</p>}
                    </div>
                    <div className='form-group'>
                        <textarea className='form-control' value={description} onChange={handleDescriptionOnChange} placeholder='Enter Description' />
                        {!description && <p className='requiredMsg'>Description is required</p>}

                    </div>
                </form>
            </div>
            <button type="button" className="" onClick={handleAddBook} disabled={isDisabled}>Add Book</button>
        </div>

    )
}
