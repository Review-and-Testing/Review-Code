import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadTasks } from "./redux/actions/taskActions";
import TaskTable from "./components/TaskTable";
import TaskDetail from "./components/TaskDetail";
import TaskEdit from "./components/TaskEdit";
import MainLayout from "./components/MainLayout";
import "./App.css"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TaskTable />} />
          <Route path="task/:id" element={<TaskDetail />} />
          <Route path="task/edit/:id" element={<TaskEdit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
