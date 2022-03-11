import React, { useContext, useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import TaskListContext from "../../store/taskList-context";
const TodoList = (props) => {
  const taskCtx = useContext(TaskListContext);
   var curDateObj = new Date();
   var curDate = curDateObj.getDate();
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []);
  useEffect(() => {
    setTaskList(JSON.parse(localStorage.getItem("todo")) || []);
  }, [taskCtx]);
  return (
    <div className={`${styles.TodoListStyle}`}>
      {taskList.length === 0 ? (
        <p style={{color: "red",textAlign:"center"}}>Empty list</p>
      ) : (
        taskList.map((i) => {
          console.log(i.timeOfTodo)
               console.log(curDate)
             if(i.timeOfTodo!==curDate){
                localStorage.clear();
            }
          return <TodoItem title={i.title} isCompleted={i.isCompleted} />;
        })
      )}
    </div>
  );
};

export default TodoList;
