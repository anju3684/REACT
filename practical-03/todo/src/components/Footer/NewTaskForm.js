import React, { useState,useContext } from "react";
import TaskListContext from "../../store/taskList-context";
import styles from "./NewTaskForm.module.css";
const NewTaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  
  const listCtx =  useContext(TaskListContext)
  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onAddTaskHandler = (event) => {
    // event.preventDefault();

    if (event.key === "Enter") {
      if (enteredTitle.trim().length === 0) {
        alert("invalid");
        return;
      }
      listCtx.addItem({title : enteredTitle,isCompleted : false,timeOfTodo:new Date().getDate()})
      setEnteredTitle("")
      props.onEscape();
      //listCtx.removeItem(listCtx.items)
    }
    if (event.key === "Escape") {
      props.onEscape();
      return;
    }
  };

  return (
   
      <input className={styles.text}
        placeholder="enter new task"
        type="text"
        value={enteredTitle}
        onChange={onTitleChangeHandler}
        onKeyDown={onAddTaskHandler}
      />
   
  );
};

export default NewTaskForm;
