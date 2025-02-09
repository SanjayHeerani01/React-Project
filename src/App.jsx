import './App.css'

import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
<Routes>
    <Route index element={ <EmployeeList/> }/>
    <Route path="/" element={ <EmployeeList/> }/>
    <Route path="/add-employee" element={<AddEmployee/>}/>
</Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

