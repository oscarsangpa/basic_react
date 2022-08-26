import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import DashBoardPage from './pages/dashboard/DashBoardPage';
import NotFoundPage from './pages/404/NotFoundPage'
import LoginFormik from './components/pure/forms/LoginFormik';
import HomePage from './pages/home/HomePage';


function AppFinal() {

  let loggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" 
          element={
            loggedIn ?
            <Navigate from="/" to="/dashboard"/>
            : <Navigate from="/" to="/login"/>
          } />
        <Route path="/" element={ <HomePage/> } />dPage/> 
        <Route path="/dashboard" element={ loggedIn ? <Navigate to="/login"/> : <Navigate to="/dashboard"/> } />
        <Route path="/login" element={ <LoginFormik/> } />
        <Route path="*" element={ <NotFoundPage/> } />

      </Routes>

    </BrowserRouter>
    


  );
}

export default AppFinal;
