import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TaskEdit.css';

const TaskEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:5001/tasks/${id}`);
      const data = await response.json();
      setTask(data);
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      navigate(`/task/${id}`);
    }
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="task-edit-container">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit} className="task-edit-form">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={task.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Assigned To:</label>
          <input type="email" name="assignedTo" value={task.assignedTo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={task.status} onChange={handleChange}>
            <option value="Open">Open</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Under-review">Under-review</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="form-group">
          <label>Priority:</label>
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input type="text" name="startDate" value={task.startDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input type="text" name="endDate" value={task.endDate} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default TaskEdit;
