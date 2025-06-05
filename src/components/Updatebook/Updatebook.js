import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBook } from '../../redux/books/booksSlice';
import  './Updatebook.css';

export default function Updatebook(props) {
    const dispatch = useDispatch();

    const selectedBook = useSelector((state) => state.books.selectedBook);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [viewStatus, setViewStatus] = useState();
    const [hasChanges, setHasChanges] = useState(false);


    const handleUpdateBook = () => {
        if (hasChanges) {
            dispatch(updateBook({
                id: selectedBook.id,
                title,
                description,
                viewStatus
            }));
                

            setTitle('');
            setDescription('');
            props.closeUpdateModal();
            props.handleShoWAlert("success","The book has been updated");
            setHasChanges(false);
        }

    };

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value);
        setHasChanges(true);
    }

    const handleDescriptionOnChange = (e) => {
        setDescription(e.target.value);
        setHasChanges(true);
    }

    useEffect(() => {
        if (selectedBook) {
            setTitle(selectedBook.title);
            setDescription(selectedBook.description);
            setViewStatus(selectedBook.viewStatus)
        }
    }, [selectedBook]);

    return (
        <div className={!props.viewUpdateModal ? "modal" : "modal show"} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Book</h5>
                    </div>
                    <div className="modal-body">
                        {selectedBook &&
                            <form>
                                <div className='form-group'>
                                    <input className='form-control' value={title} onChange={handleTitleOnChange} placeholder='Enter Title' />
                                </div>
                                <div className='form-group'>
                                    <textarea className='form-control' value={description} onChange={handleDescriptionOnChange} placeholder='Enter Description' />
                                </div>
                            </form>

                        }

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="UpdateBtn" onClick={handleUpdateBook} disabled={!hasChanges}>Update</button>
                        <button type="button" className="closeBtn" onClick={props.closeUpdateModal}>Close</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
