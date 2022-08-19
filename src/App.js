import './App.css';
import { TaskList } from './components/container/TaskList';
import LoginFormik from './components/pure/forms/LoginFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <TaskList/>
      {/* </header> */}
      
      <LoginFormik/>
    </div>
  );
}

export default App;
