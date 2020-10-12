import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Title from "./Components/Title";
import TaskList from "./Components/TaskList";
import InputField from "./components/InputField";
import StatusBar from "./components/StatusBar";
import EmptyElement from "./components/EmptyElement";
import LoginForm from "./components/LoginForm";

console.log(10);

console.log(20);

let h1 = React.createElement("h1", { id: "uniq" }, "hello react");

console.log(h1);

//ReactDOM.render(h1, document.querySelector("#app-root"));

const App = () => {
	/*
	const tasks = [
		{name:"Some 1",
		 done: true},
		{name:"Some 2",
		 done: false},
		{name:"Some 3",
		 done: true}
	];
	*/
	const [tasks, setTasks] = useState(
		localStorage.getItem("tasks")
			? JSON.parse(localStorage.getItem("tasks"))
			: [
				{
					name: "Some 1",
					done: true,
					priority: "low"
				},
				{
					name: "Some 2",
					done: false,
					priority: "medium"
				},
				{
					name: "Some 3",
					done: true,
					priority: "high"
				}
			]);

	const [isDeleted, setIsDeleted] = useState(false);
	const deleteElement = () => setIsDeleted(true);

	const [pendingTasks, setPendingTasks] = useState(0);
	const [completedTasks, setCompletedTasks] = useState(0);

	const [lowPriorityTasks, setLowPriorityTasks] = useState(0);
	const [mediumPriorityTasks, setMediumPriorityTasks] = useState(0);
	const [highPriorityTasks, setHighPriorityTasks] = useState(0);

	window.setTasks = setTasks;
	const toggleTask = (taskIndex) => {
		console.log(taskIndex);
		setTasks(
			tasks.map((task, index) => {
				if (taskIndex === index) {
					return {
						...task,
						done: !task.done,
					};
				}
				return task;
			})
		);
	};

	const addTask = (newTaskName) => {
		setTasks([
			...tasks,
			{
				name: newTaskName,
				done: false
			}
		]);
	};

	const togglePriority = (taskIndex) => {
		setTasks(
			tasks.map((task, index) => {
				let currentPriority = task.priority;
				let newPriority = "";
				if (currentPriority == "low") {
					newPriority = "medium";
				} else if (currentPriority == "medium") {
					newPriority = "high";
				} else {
					newPriority = "low";
				}
				if (taskIndex === index) {
					return {
						...task,
						priority: newPriority,
					};
				}
				return task;
			})
		);
	};

	const deleteTask = (taskIndex) => {
		let taskNameToDelete = "";

		tasks.map((task, index) => {
			if (taskIndex === index) {
				taskNameToDelete = task.name;
			}
		})

		tasks.splice(taskIndex, 1);

		setTasks([
			...tasks
		]);
	};

	const reCalculateStatusList = () => {

		let completedTasks = 0;
		let pendingTasks = 0;

		tasks.map((task) => {
			if (task.done) {
				completedTasks++;
			} else {
				pendingTasks++;
			}
		});

		console.log("tasks : "+JSON.stringify(tasks));
		console.log("completedTasks : " + completedTasks);
		console.log("pendingTasks : " + pendingTasks);

		setPendingTasks(pendingTasks);
		setCompletedTasks(completedTasks);
	};

	const reCalculatePriorityList = () => {

		let lowPriorityTasks = 0;
		let mediumPriorityTasks = 0;
		let highPriorityTasks = 0;

		tasks.map((task) => {
			if (task.priority == "low") {
				lowPriorityTasks++;
			} else if (task.priority == "medium") {
				mediumPriorityTasks++;
			} else if (task.priority == "high"){
				highPriorityTasks++;
			}
		})

		console.log("lowPriorityTasks : " + lowPriorityTasks);
		console.log("mediumPriorityTasks " + mediumPriorityTasks);
		console.log("highPriorityTasks : " + highPriorityTasks);

		setLowPriorityTasks(lowPriorityTasks);
		setMediumPriorityTasks(mediumPriorityTasks);
		setHighPriorityTasks(highPriorityTasks);
	};

	useEffect(() => {
		console.log("Parent Effect");
		localStorage.setItem("tasks", JSON.stringify(tasks));
	});

	return (

		<Fragment>
			<Title text="TODO" />
			{/* A JSX comment 
			<ol>
				{tasks.map((task, index) => {
					const onTaskClicked = () => {
						toggleTask(index);
					}
					return (
						<li onClick={onTaskClicked} key={index}>
							{task.name} {task.done ? "true" : "false"}
						</li>
					);
				})}
			</ol>
			*/}
			{/*
			<InputField addTask={addTask} />
			<TaskList tasks={tasks}
				toggleTask={toggleTask}
				togglePriority={togglePriority}
				deleteTask={deleteTask}
				reCalculateStatusList={reCalculateStatusList}
				reCalculatePriorityList={reCalculatePriorityList} />
			<StatusBar
				pendingTasksCount={pendingTasks}
				completedTasksCount={completedTasks}
				lowPriorityCount={lowPriorityTasks}
				mediumPriorityCount={mediumPriorityTasks}
				highPriorityCount={highPriorityTasks} />
			
			{!isDeleted ? <EmptyElement deleteElement={deleteElement} /> : null}\
			*/}
			
			<LoginForm usernameToDisplay="" passowrdToDisplay="" />
			
		</Fragment>
	);
};

ReactDOM.render(<App />, document.querySelector("#app-root"));