import axios from 'axios';

// const API_URL = 'https://jsonplaceholder.typicode.com/todos'; // Sample API http://localhost:5001/tasks

const API_URL = 'http://localhost:5001/tasks';

export const fetchTasks = () => {
    return axios.get(API_URL);
};
