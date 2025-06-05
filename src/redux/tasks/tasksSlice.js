import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    tasks: [],
    loading: false,
    error: null,
    selectedTask: null
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    try {
        const response = await axios.get('https://statushub.glitch.me/tasks');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch tasks');
    }
});

export const viewTask = createAsyncThunk('tasks/viewTask', async (id) => {
    try {
        const response = await axios.get(`https://statushub.glitch.me/tasks/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch task');
    }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
    try {
        await axios.delete(`https://statushub.glitch.me/tasks/${id}`);
        return id;
    } catch (error) {
        throw new Error('Failed to delete tasks');
    }
});

export const editTask = createAsyncThunk('tasks/editTask', async ({ id, updatedData }) => {
    try {
        const response = await axios.put(`https://statushub.glitch.me/tasks/${id}`, updatedData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update tasks');
    }
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;

            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
        builder
            .addCase(deleteTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter((task) => task._id !== action.payload);
                state.loading = false;
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
        builder
            .addCase(editTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(editTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.map((task) =>
                    task._id === action.payload._id ? action.payload : task
                );
                state.loading = false;
            })
            .addCase(editTask.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
        builder
            .addCase(viewTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(viewTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.map((task) =>
                    task._id === action.payload._id ? action.payload : task
                );
                state.selectedTask = action.payload;
                state.loading = false;
            })
            
            .addCase(viewTask.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});


export default tasksSlice.reducer;