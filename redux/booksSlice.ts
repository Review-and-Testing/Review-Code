import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  isRead: boolean;
}

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload);
    },
    updateBook(state, action: PayloadAction<Book>) {
			const index = state.books.findIndex(b => b.id === action.payload.id);
			if (index !== -1) {
					state.books[index] = action.payload;
			}
		},
    toggleReadStatus(state, action: PayloadAction<string>) {
      const book = state.books.find(b => b.id === action.payload);
      if (book) book.isRead = !book.isRead;
    },
  },
});

export const { addBook, toggleReadStatus, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
