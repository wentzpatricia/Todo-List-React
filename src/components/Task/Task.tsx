import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { TaskInterface } from './taskInterface';

interface TaskProps {
  task: TaskInterface;
  onDeleted: (taskId: string) => void;
  onCompleted: (taskId: string) => void;
}

export const Task: React.FC<TaskProps> = ({ task, onCompleted, onDeleted }) => {
  return (
    <div className={styles.task}>
      <button
        className={styles.task__checkButton}
        onClick={() => onCompleted(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.task__textCompleted : ''}>
        {task.title}
      </p>
      <button
        className={styles.task__deleteButton}
        onClick={() => onDeleted(task.id)}
      >
        <TbTrash />
      </button>
    </div>
  );
};
