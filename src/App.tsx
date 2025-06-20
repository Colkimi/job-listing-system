import JobBoard from './components/JobBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="/public/images/bg-header-desktop.svg" alt="Header" className="header-img" />
      </header>
      <JobBoard />
    </div>
  );
}

export default App;
