import './App.css';
import { TaskList } from './components/container/TaskList';
import DashBoard from './pages/dashboard/DashBoard';
// import LoginFormik from './components/pure/forms/LoginFormik';
// import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <TaskList/>
      {/* </header> */}
      
      {/* <RegisterFormik/> */}
      {/* <LoginFormik/> */}

      <DashBoard/>

    </div>
  );
}

export default App;
