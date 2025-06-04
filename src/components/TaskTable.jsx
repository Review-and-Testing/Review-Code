import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions';
import { useNavigate } from 'react-router-dom';
import './TaskTable.css';

const TaskTable = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sorting state
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const handleDelete = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(taskId));
    }
  };

  const handleEdit = (taskId) => {
    navigate(`/task/edit/${taskId}`);
  };

  const handleDetail = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Sort tasks based on current sort config
  const sortedTasks = [...tasks].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valA = a[sortConfig.key]?.toString().toLowerCase();
    const valB = b[sortConfig.key]?.toString().toLowerCase();

    if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const renderSortArrow = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽';
  };

  return (
    <div className="task-table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('title')}>Title{renderSortArrow('title')}</th>
            <th onClick={() => handleSort('assignedTo')}>Assigned To{renderSortArrow('assignedTo')}</th>
            <th onClick={() => handleSort('status')}>Status{renderSortArrow('status')}</th>
            <th onClick={() => handleSort('priority')}>Priority{renderSortArrow('priority')}</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task) => (
            <tr key={task.id} onClick={() => handleDetail(task.id)}>
              <td>{task.title}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate || ''}</td>
              <td>
                <button className="edit-btn" onClick={(e) => { e.stopPropagation(); handleEdit(task.id); }}>Edit</button>
                <button className="delete-btn"  onClick={(e) => { e.stopPropagation(); handleDelete(task.id); }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
