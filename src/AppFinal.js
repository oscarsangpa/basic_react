import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
// import { TaskList } from './components/container/TaskList';
import DashBoard from './pages/dashboard/DashBoard';
import NotFoundPage from './pages/404/NotFoundPage'
// import LoginFormik from './components/pure/forms/LoginFormik';
// import RegisterFormik from './components/pure/forms/RegisterFormik';

function AppFinal() {

  let loggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="">
          {
            loggedIn ?
            <Navigate to="/dashboard"/>
            : <Navigate to="/login"/>
          }

        </Route>
        <Route path="dashboard" element={ <DashBoard/> } />
        <Route path="*" element={ <NotFoundPage/> } />

      </Routes>
    </BrowserRouter>
    


  );
}

export default AppFinal;
