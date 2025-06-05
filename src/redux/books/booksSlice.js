import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    selectedBook: null,

};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const newBook = {
                ...action.payload,
                id: state.books.length + 1, 
              };
            state.books.push(newBook);
        },
        removeBook: (state, action) => {
            // state.books.push(action.payload);
        },
        selectBook: (state, action) => {
            const book = state.books.find(book => book.id === action.payload);
            if(book){
                state.selectedBook = book;
            }            
        },
        updateBookStatus: (state, action) => {
            const book = state.books.find(book => book.id === action.payload.id);
            if(book){
                book.viewStatus = action.payload.viewStatus;
            }            
        },
        updateBook: (state, action) => {
            const bookIndex = state.books.findIndex(book => book.id === action.payload.id);
            if (bookIndex >= 0) {
                state.books[bookIndex] = { ...state.books[bookIndex], ...action.payload };
            }
        },
    },
});

export const { addBook, selectBook, updateBook, updateBookStatus } = booksSlice.actions;
export default booksSlice.reducer;