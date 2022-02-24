import React from 'react'
const TaskListContext =  React.createContext({
    items : [],
    addItem : (item) => {},
    updateItem:(item)=>{}

})

export default TaskListContext