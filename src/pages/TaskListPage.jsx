import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions/taskActions";
import TaskTable from "../components/TaskTable";

export default function TaskListPage() {
  const dispatch = useDispatch();
  const { loading, tasks, error } = useSelector((state) => state.taskList);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading tasks...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <TaskTable tasks={tasks} />
      )}
    </div>
  );
}