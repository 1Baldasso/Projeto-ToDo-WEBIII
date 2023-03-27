import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import TodoCard from './Components/Card';
function App() {
  return (
    <div className="App">
      <Form/>
      <TodoCard/>
    </div>
  );
}

export default App;
