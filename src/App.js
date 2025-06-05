import { useState } from 'react';
import './App.css';
import Addbook from './components/Addbook/Addbook';
import Navbar from './components/Navbar/Navbar';
import Book from './components/Book/Book';
import Viewbook from './components/Viewbook/Viewbook';
import Updatebook from './components/Updatebook/Updatebook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert/Alert';


function App() {
  const [viewUpdateModal, setviewUpdateModal] = useState(false); 
  const [showAlert, setShowAlert] = useState(false); 
  const [message, setMessage] = useState(""); 
  const [alerttype, setAlertType] = useState("");

  const showUpdateModal = () => {
    setviewUpdateModal(true);
  }

  const closeUpdateModal = () => {
    setviewUpdateModal(false);
  }

  const handleShoWAlert = (type,msg) =>{
    setShowAlert(true);
    setMessage(msg);
    setAlertType(type);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
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
        <Updatebook viewUpdateModal={viewUpdateModal} closeUpdateModal={closeUpdateModal} handleShoWAlert={handleShoWAlert}/>
       {showAlert && <Alert message={message} alerttype={alerttype} closeAlert={closeAlert}/>} 
        <Routes>
          <Route path="/" element={<Book showUpdateModal={showUpdateModal} />} />
          <Route path="/viewbook" element={<Viewbook />}/>
          <Route path="/addbook" element={<Addbook handleShoWAlert={handleShoWAlert}/>} />          
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
