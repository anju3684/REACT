import React, { useContext } from "react";
import styles from "./TodoItem.module.css";
import TaskListContext from "../../store/taskList-context";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const TodoItem = (props) => {
  const taskCtx = useContext(TaskListContext);
  const setToComplete = () => {
    //console.log(props.title)
    taskCtx.updateItem(props.title);
  };

  return (
    <div className={styles.todoItemClass} onClick={setToComplete}>
      <p style={props.isCompleted ? { color: "grey" } : { color: "black" }}>
        {props.title}
      </p>
     {props.isCompleted && <TaskAltIcon className={styles.icon}/>}
    </div>
  );
};

export default TodoItem;

