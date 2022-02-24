import styles from './App.module.css';
import { Container } from './components/Container/Container';
import TaskListProvider from './store/TaskListProvider';

function App() {
  
  return (
    <TaskListProvider>
    <div className={styles.Main}>
      <Container />
    </div>
    </TaskListProvider>
  );
}

export default App;
