import React from 'react';
import './Viewbook.css';
import { useSelector } from 'react-redux';

export default function Viewbook(props) {
    const selectedBook = useSelector((state) => state.books.selectedBook);
    return (
        <>
            {selectedBook &&

                <div className='container bookDetails'>
                    <h2>{selectedBook.title}</h2>
                    <div className='descriptionWrap'>
                        {selectedBook.description}
                    </div>
                </div>

            }
        </>
    )
}
