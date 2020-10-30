import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot,
} from 'recoil';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoList /> 
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
