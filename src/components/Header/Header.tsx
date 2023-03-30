import { useState } from 'react';
import styles from './header.module.css';
import { GoTasklist } from 'react-icons/go';

interface HeaderProps {
  onAddTask: (title: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  };

  const onChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>
        to<span>do</span>
      </h2>
      <GoTasklist className={styles.header__icon} />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          className={styles.newTaskForm__input}
          placeholder="add new task"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button className={styles.newTaskForm__btn}>Create</button>
      </form>
    </header>
  );
};
