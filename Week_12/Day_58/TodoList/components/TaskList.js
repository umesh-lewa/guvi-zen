import React, { Fragment, useState ,useEffect } from "react";



const TaskList = (props) => {
    useEffect(() => {
        console.log("Parent Effect");
    });

    return (
        <ol>
            {props.tasks.map((task, index) => {
                const onTaskClicked = () => {
                    props.toggleTask(index);
                    props.reCalculateStatusList();
                }
                const onTogglePriorityClicked = () => {
                    props.togglePriority(index);
                    props.reCalculatePriorityList();
                }
                const onDeleteClicked = () => {
                    props.deleteTask(index);
                    props.reCalculateStatusList();
                    props.reCalculatePriorityList();
                }
                return (
                    <li key={index}>
                        {task.name} {task.done ? "✓" : "❌"}
                        <button onClick={onTaskClicked}>Toggle Status</button>
                        <button onClick={onTogglePriorityClicked}>Toggle Priority</button>
                        {task.priority}
                        <button onClick={onDeleteClicked}>Delete</button>
                    </li>
                );
            })}
        </ol>
    )
}

export default TaskList;