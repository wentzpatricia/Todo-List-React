import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { TaskInterface } from './components/Task/taskInterface';

const LOCAL_STORAGE_KEY = 'todo:savedTasks';

export function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  const loadSaveTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSaveTasks();
  }, []);

  const setTaskAndSave = (newTask: TaskInterface[]) => {
    setTasks(newTask);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));
  };

  const addTask = (taskName: string) => {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskName,
        isCompleted: false,
      },
    ]);
  };

  const toggleTaskCompletedById = (taskId: string) => {
    const newTasks = tasks.map((task: TaskInterface) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskAndSave(newTasks);
  };

  const deleteTaskById = (taskId: string) => {
    const newTask = tasks.filter((task: TaskInterface) => task.id !== taskId);
    setTaskAndSave(newTask);
  };

  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onCompleted={toggleTaskCompletedById}
        onDeleted={deleteTaskById}
      />
    </div>
  );
}
