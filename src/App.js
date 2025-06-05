import './App.css';
import Updatetask from './components/Updatetask/Updatetask';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Taskdetails from './components/Taskdetails/Taskdetails';
import { useState } from 'react';
import Alert from './components/Alert/Alert';
import ViewTask from './components/ViewTask/ViewTask';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [alerttype, setAlertType] = useState("");

  const handleShoWAlert = (type, msg) => {
    setShowAlert(true);
    setMessage(msg);
    setAlertType(type);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }

  const closeAlert = () => {
    setShowAlert(false);
    setMessage("");
    setAlertType("");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        {showAlert && <Alert message={message} alerttype={alerttype} closeAlert={closeAlert} />}
        
        <Routes>
          <Route path='/' element={<Taskdetails  handleShoWAlert={handleShoWAlert}/>} />
          <Route path="/update-task/:taskId" element={<Updatetask handleShoWAlert={handleShoWAlert} />} />
          <Route path="/view-task/:taskId" element={<ViewTask/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
