import React, { useState } from 'react';
import './Taskdetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks, deleteTask } from '../../redux/tasks/tasksSlice';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../DeleteModal/DeleteModal';
import Loader from '../Loader/Loader';


export default function Taskdetails(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tasks } = useSelector((state) => state.tasks);
    const loading = useSelector((state) => state.tasks.loading)

    const [showModal, setShowModal] = useState(false);
    const [taskId, setTaskId] = useState(null)

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });


    const sortedTasks = [...tasks].sort((a, b) => {
        if (sortConfig.key) {
            const aVal = a[sortConfig.key]?.toLowerCase();
            const bVal = b[sortConfig.key]?.toLowerCase();

            if (aVal < bVal) return sortConfig.direction === 'ascending' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });



    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleDelete = async (e, id) => {
        e.stopPropagation();

        setTaskId(id);
        setShowModal(true);
    };

    const handleEditClick = (e, id) => {
        e.stopPropagation();
        navigate(`/update-task/${id}`);
    };

    const closeDeleteModal = () => {
        setShowModal(false);
    };

    const handleDleteOkBtnClick = async (e) => {
        e.stopPropagation();
        await dispatch(deleteTask(taskId));
        setShowModal(false);
        props.handleShoWAlert("success", "The task has been deleted.");
        setTaskId(null);
    }

    const handleViewDetails = async (e, id) => {
        e.stopPropagation();
        navigate(`/view-task/${id}`);
    };


    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };
    return (
        <>
            {showModal && <DeleteModal closeDeleteModal={closeDeleteModal} showModal={showModal} handleDleteOkBtnClick={handleDleteOkBtnClick} />}
            <div className="container tasksDetailsWrap">
                <h2><span>Tickets</span></h2>
                {
                    loading ? (
                        <Loader />
                    ) :
                        (
                            <div className='tableWrapper'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Sno</th>
                                            <th onClick={() => handleSort('title')}>
                                                Title{' '}
                                                {sortConfig.key === 'title' ? (
                                                    sortConfig.direction === 'ascending' ? (
                                                        <i className="bi bi-sort-down-alt"></i>
                                                    ) : (
                                                        <i className="bi bi-sort-down"></i>
                                                    )
                                                ) : (
                                                    <i className="bi bi-arrow-down-up"></i>
                                                )}
                                            </th>

                                            <th onClick={() => handleSort('assignedTo')}>
                                                Assigned To{' '}
                                                {sortConfig.key === 'assignedTo' ? (
                                                    sortConfig.direction === 'ascending' ? (
                                                        <i className="bi bi-sort-down-alt"></i>
                                                    ) : (
                                                        <i className="bi bi-sort-down"></i>
                                                    )
                                                ) : (
                                                    <i className="bi bi-arrow-down-up"></i>
                                                )}
                                            </th>

                                            <th onClick={() => handleSort('priority')}>
                                                Priority{' '}
                                                {sortConfig.key === 'priority' ? (
                                                    sortConfig.direction === 'ascending' ? (
                                                        <i className="bi bi-sort-down-alt"></i>
                                                    ) : (
                                                        <i className="bi bi-sort-down"></i>
                                                    )
                                                ) : (
                                                    <i className="bi bi-arrow-down-up"></i>
                                                )}
                                            </th>


                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th onClick={() => handleSort('status')}>
                                                Status{' '}
                                                {sortConfig.key === 'status' ? (
                                                    sortConfig.direction === 'ascending' ? (
                                                        <i className="bi bi-sort-down-alt"></i>
                                                    ) : (
                                                        <i className="bi bi-sort-down"></i>
                                                    )
                                                ) : (
                                                    <i className="bi bi-arrow-down-up"></i>
                                                )}
                                            </th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedTasks.map((task, index) => (
                                            <tr key={index} onClick={(e) => handleViewDetails(e, task._id)}>
                                                <td className='sno'>#{index + 1}</td>
                                                <td className='title'>{task.title}</td>
                                                <td className='assignedTo'>{task.assignedTo}</td>
                                                <td className='priority'>{task.priority}</td>
                                                <td className='startDate'>{task.startDate}</td>
                                                <td className='endDate'>{task.endDate}</td>
                                                <td className='status'><span className={task.status}>{task.status}</span></td>
                                                <td>
                                                    <div className='editDeleteBtnWrap'>
                                                        <button onClick={(e) => handleEditClick(e, task._id)}><i className="bi bi-pencil-square"></i></button>
                                                        <button onClick={(e) => handleDelete(e, task._id)}><i className="bi bi-trash3"></i></button>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        )
                }


            </div>
        </>

    )
}
