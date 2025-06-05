import React, { useState, useEffect } from 'react';
import './Updatetask.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, editTask } from '../../redux/tasks/tasksSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Updatetask(props) {
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hasChanges, setHasChanges] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.tasks.loading);

  const { taskId } = useParams();

  useEffect(() => {
    if (!tasks.length) {
      dispatch(fetchTasks());
    }
  }, [dispatch, tasks.length]);

  useEffect(() => {
    if (taskId && tasks.length) {
      const task = tasks.find(t => t._id === taskId);
      if (task) {
        setTitle(task.title);
        setAssignedTo(task.assignedTo);
        setStatus(task.status);
        setPriority(task.priority);
        setStartDate(convertToDateFormat(task.startDate));
        setEndDate(convertToDateFormat(task.endDate));
      }
    }
  }, [taskId, tasks]);


  const handleSaveChanges = () => {
    if (hasChanges) {
      dispatch(editTask({
        id: taskId,
        updatedData: {
          title,
          assignedTo,
          status,
          priority,
          startDate: convertToDisplayDateFormat(startDate),
          endDate: convertToDisplayDateFormat(endDate),
        }
      }));
    }
    props.handleShoWAlert("success", "The task has been successfully updated.");
    setHasChanges(false);
    navigate('/');
  };

  const convertToDateFormat = (dateStr) => {
    const date = new Date(dateStr);

    if (isNaN(date)) {
      return "";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const convertToDisplayDateFormat = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthAbbreviation = months[monthIndex];
    return `${day}${monthAbbreviation}${year}`;
  };



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="updateTaskWrapper container">
          <h2><span>Update Task</span></h2>
          <div className='innerWrap'>
            <div className="input-group mb-3">
              <label>Title</label>
              <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value); setHasChanges(true) }} />
            </div>
            <div className="input-group mb-3">
              <label>Assigned To</label>
              <select className="form-control" value={assignedTo} onChange={(e) => { setAssignedTo(e.target.value); setHasChanges(true) }}>
                {tasks.map((task, index) => (
                  <option value={task.email} key={`email-${index}`}>
                    {task.assignedTo}
                  </option>

                ))}
              </select>
            </div>
            <div className="input-group mb-3">
              <label>Status</label>
              <select className="form-control" value={status} onChange={(e) => { setStatus(e.target.value); setHasChanges(true) }}>
                <option value="Open">Open</option>
                <option value="In-Progress">In Progress</option>
                <option value="Done">Done</option>
                <option value="Under-review">Under-review	</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label>Priority</label>
              <select className="form-control" value={priority} onChange={(e) => { setPriority(e.target.value); setHasChanges(true) }}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label>Start Date</label>
              <input type="date" className="form-control" value={startDate} onChange={(e) => { setStartDate(e.target.value); setHasChanges(true) }} />
            </div>
            <div className="input-group mb-3">
              <label>End Date</label>
              <input type="date" className="form-control" value={endDate} onChange={(e) => { setEndDate(e.target.value); setHasChanges(true) }} placeholder='00-00-00' />
            </div>
            <div className='text-center'>
              <button type="button" className="btn btn-primary" onClick={handleSaveChanges} disabled={!hasChanges}>Update</button>
            </div>

          </div>
        </div>
      )}


    </>
  );
}
