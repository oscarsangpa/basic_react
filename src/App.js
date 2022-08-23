import './App.css';
import { TaskList } from './components/container/TaskList';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <TaskList/>
      {/* </header> */}
      
      <RegisterFormik/>
      {/* <LoginFormik/> */}

    </div>
  );
}

export default App;
