import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { TodoItemProps } from "./TodoItem";

export default function App() {
	const [todos, setTodos] = useState(() => {});

	function addTodo(title: string) {}

	function toggleTodo(id: number, completed: boolean) {}

	function deleteTodo(id: number) {}

	return (
		<>
			<NewTodoForm onSubmit={addTodo} />
			<h1 className="header">Todo List</h1>
			<TodoList
				todos={todos}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		</>
	);
}
