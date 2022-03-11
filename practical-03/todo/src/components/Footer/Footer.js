import React, {useState} from 'react';
import NewTaskForm from './NewTaskForm';
import styles from './Footer.module.css';

const Footer = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  
  const startAddingHandler = () => {
    setIsAdding(true)
  }
  const stopAddingHandler = () => {
    setIsAdding(false)
  }
  return <div className={styles.button}>
    {!isAdding && <button className={styles.plus} onClick={startAddingHandler} >+</button>}
    {isAdding && <NewTaskForm onEscape={stopAddingHandler}/>}
      
  </div>;
};

export default Footer;
