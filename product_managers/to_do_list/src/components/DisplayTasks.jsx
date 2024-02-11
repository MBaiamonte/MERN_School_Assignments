import React,{useState} from "react";

const DisplayTask=(props)=>{
    const {taskList,setTaskList}=props

    const deleteHandler=(e,task)=>{
        e.preventDefault();
        console.warn("--------------------", task)
        setTaskList(taskList.filter(val=>val!==task));
    };
    const taskCompleted=(e,task)=>{
        e.preventDefault();
        console.log(task.isChecked)
        if(task.isChecked===true){
            task.isChecked=false;
        
        }else{
            task.isChecked=true;
        };
        // task.isChecked=!task.isChecked
        //^^ one liner of lines 14-19
        console.log(task.isChecked);
        setTaskList([...taskList]);
    };
    //NOTE:^^ due to state lag time the cross through is delayed by on "refresh/cycle"

    return(
        <>
            <h3>Current Task List</h3>
            <div>
                {taskList.map((task,index)=>
                    <div>
                        {task.isChecked?
                        <ul>
                            <label style={{textDecoration:'line-through'}}  >{task.name}</label>               
                            <input className="checkBoxStyles" type="checkbox" onChange={(e)=>taskCompleted(e,task)} checked></input>
                            <button onClick={(e)=>deleteHandler(e,task)}>Delete Task</button>
                        </ul>:
                        <ul>
                            <label >{task.name}</label>
                            <input className="checkBoxStyles"  type="checkbox" onChange={(e)=>taskCompleted(e,task)} ></input>
                            <button onClick={(e)=>deleteHandler(e,task)}>Delete Task</button>
                        </ul>
                        }
                    </div>)}
            </div>
        </> //end return 
    );
};
export default DisplayTask;