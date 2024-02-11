import React,{useState} from "react";

const TaskForm=(props)=>{
    const [task,setTask]=useState({})
    const {taskList,setTaskList}=props

    const formHandler=(e)=>{
        e.preventDefault();
        console.log({task})
        setTaskList([...taskList,task]);
        setTask({name:""});
        console.log(taskList);
    };
    const handleTask=(e)=>{
        setTask({
            name: e.target.value,
            isChecked: false
        });
    }

    return(
        <>
        <h3>Task Form</h3>
        <form onSubmit={formHandler}>
            <label >Task: </label>
            <input type="text" name="name" onChange={handleTask} value={task.name}/>
            <input type="submit" value="Add New Task" />
        </form>
        </>
    );

};
export default TaskForm;