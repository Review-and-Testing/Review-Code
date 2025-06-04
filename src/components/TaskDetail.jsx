import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TaskDetail.css';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:5001/tasks/${id}`);
      const data = await response.json();
      setTask(data);
    };

    fetchTask();
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className="task-detail-container">
      <h2>Task Details</h2>
      <div className="task-detail-card">
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Assigned To:</strong> {task.assignedTo}</p>
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
        <p><strong>Start Date:</strong> {task.startDate}</p>
        <p><strong>End Date:</strong> {task.endDate || 'Not Completed'}</p>
      </div>
    </div>
  );
};

export default TaskDetail;
