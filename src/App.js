import './App.css';
import { TaskList } from './components/container/TaskList';
import AxiosCRUD from './components/pure/AxiosCRUD';
import DashBoardPage from './pages/dashboard/DashBoardPage';
// import LoginFormik from './components/pure/forms/LoginFormik';
// import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <TaskList/> */}
      {/* </header> */}
      
      {/* <RegisterFormik/> */}
      {/* <LoginFormik/> */}

      {/* <DashBoard/> */}
      <AxiosCRUD/>

    </div>
  );
}

export default App;
