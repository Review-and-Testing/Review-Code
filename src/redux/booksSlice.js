import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('books');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    list: loadState(),
    filter: 'ALL',
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push({ ...action.payload, id: Date.now(), read: false });
    },
    updateBook: (state, action) => {
      const index = state.list.findIndex(book => book.id === action.payload.id);
      if (index > -1) state.list[index] = { ...state.list[index], ...action.payload };
    },
    toggleReadStatus: (state, action) => {
      const book = state.list.find(book => book.id === action.payload);
      if (book) book.read = !book.read;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addBook, updateBook, toggleReadStatus, setFilter } = booksSlice.actions;
export default booksSlice.reducer;