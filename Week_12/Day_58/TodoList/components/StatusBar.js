import React, { useState } from "react";

const StatusBar = (props) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <h4>Pending Tasks ❌</h4>
            <h4>{props.pendingTasksCount}</h4>
            <h4>Completed Tasks ✓</h4>
            <h4>{props.completedTasksCount}</h4>
            <h4>High Priority Tasks</h4>
            <h4>{props.highPriorityCount}</h4>
            <h4>Medium Priority Tasks</h4>
            <h4>{props.mediumPriorityCount}</h4>
            <h4>Low Priority Tasks</h4>
            <h4>{props.lowPriorityCount}</h4>
        </div>
    )
}

export default StatusBar;