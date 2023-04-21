import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import TodoCard from './Components/Card';
import { useEffect, useState } from 'react';
import FirebaseProvider from './Components/FirebaseProvider/index.ts';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './Database/firebaseConnection';
function App() {
  const firebaseProvider = new FirebaseProvider();
  const [todos, setTodos] = useState([]);
  useEffect( () => {
    async function loadTodos(){
      const dados = await firebaseProvider.getTodos()
      return dados;
    }
    loadTodos().then((dados) => {
      setTodos(dados);
    });
  }, []);
  return (
    <div className="App d-flex flex-colum justify-content-center">
      <Form/>
      {todos.map((todo) => (
        <TodoCard key={todo.id} entity={todo} />
      ))}
    </div>
  );
}

export default App;
