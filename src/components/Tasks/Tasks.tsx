import { TaskInterface } from '../Task/taskInterface';
import { Task } from '../Task/Task';
import styles from './tasks.module.css';

interface TasksProps {
  tasks: TaskInterface[];
  onDeleted: (taskId: string) => void;
  onCompleted: (taskId: string) => void;
}

export const Tasks: React.FC<TasksProps> = ({
  tasks,
  onCompleted,
  onDeleted,
}) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(
    (task: TaskInterface) => task.isCompleted
  ).length;

  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__header}>
        <div>
          <p>Create tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p>Completed</p>
          <span>
            {completedTasks} 0f {tasksQuantity}
          </span>
        </div>
      </div>

      <div className={styles.tasks__list}>
        {tasks.map((task: TaskInterface) => (
          <Task
            key={task.id}
            task={task}
            onCompleted={onCompleted}
            onDeleted={onDeleted}
          />
        ))}
      </div>
    </section>
  );
};
