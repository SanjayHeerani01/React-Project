import './App.css'

import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';


function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <EmployeeList/>
  <Route path="/AddEmployee" element={<AddEmployee/>}/>
    <AddEmployee/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

