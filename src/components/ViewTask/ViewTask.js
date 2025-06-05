import React, { useEffect } from 'react';
import './ViewTask.css';
import { viewTask } from '../../redux/tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
export default function ViewTask() {
    const dispatch = useDispatch();

    const selectedTask = useSelector((state) => state.tasks.selectedTask);
    const loading = useSelector((state) => state.tasks.loading);
    const { taskId } = useParams();


    useEffect(() => {
        if (taskId) {
            dispatch(viewTask(taskId));
        }
    }, [dispatch, taskId]);

    if (loading) {
        return <Loader />;
    }

    if (!selectedTask) {
        return <div>Task not found or unable to load task details.</div>;
    }

    return (
        <div className='container pt-80'>
            <h2><span>Ticket Detail</span></h2>
            <div className='ticketDetailWrap'>
                
               
                    <div>
                        <div>
                            <h3>Title</h3>
                            <p>{selectedTask.title}</p>
                        </div>
                        <div>
                            <h3>Assigned To</h3>
                            <p>{selectedTask.assignedTo}</p>
                        </div>
                        <div>
                            <h3>Priority</h3>
                            <p>{selectedTask.priority}</p>
                        </div>
                        <div>
                            <h3>Status</h3>
                            <p>{selectedTask.status}</p>
                        </div>
                        <div>
                            <h3>Start Date</h3>
                            <p>{selectedTask.startDate}</p>
                        </div>
                        <div>
                            <h3>End Date</h3>
                            <p>{selectedTask.endDate}</p>
                        </div>
                    </div>

            </div>
        </div>
    );

}
