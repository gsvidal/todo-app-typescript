import './App.css';
import { Todos } from './components/Todos';
import { TodoForm } from './components/TodoForm';
import { TodosContextProvider } from './store/todos-context';

function App() {
  return (
    <div className="app">
      <TodosContextProvider>
        <TodoForm />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
