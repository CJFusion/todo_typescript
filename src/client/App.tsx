import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { TodoItemProps } from "./TodoItem";

export default function App() {
	const [todos, setTodos] = useState<TodoItemProps[]>([]);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await fetch("/todos");
				const responseJson = await response.json();
				const todosData: TodoItemProps[] = responseJson.data;

				setTodos(todosData);
			} catch (error: any) {
				console.error(`Error fetching todo data:`, error.message);
			}
		};

		fetchTodos();
	}, []);

	async function addTodo(title: string) {
		try {
			const response = await fetch("/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, completed: false }),
			});

			if (!response.ok) {
				throw new Error(`Failed to add todo: ${response.statusText}`);
			}

			const newTodo = await response.json();
			setTodos((currentTodos: TodoItemProps[]) => [
				...currentTodos,
				newTodo,
			]);
		} catch (error: any) {
			console.error(`Error adding todo:`, error.message);
		}
	}

	async function toggleTodo(id: string, completed: boolean) {
		try {
			const response = await fetch(`/todos/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ completed }),
			});

			if (!response.ok) {
				throw new Error(
					`Failed to update todo: ${response.statusText}`
				);
			}

			// console.log("Todo updated successfully");
			setTodos((currentTodos) =>
				currentTodos.map((todo) =>
					todo._id === id ? { ...todo, completed } : todo
				)
			);
		} catch (error: any) {
			console.error(`Error updating todo:`, error.message);
		}
	}

	async function deleteTodo(id: string) {
		try {
			const response = await fetch(`/todos/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error(
					`Failed to delete todo: ${response.statusText}`
				);
			}

			// console.log("Todo deleted successfully");
			setTodos((currentTodos: TodoItemProps[]) =>
				currentTodos.filter((todo) => todo._id !== id)
			);
		} catch (error: any) {
			console.error(`Error deleting todo:`, error.message);
		}
	}

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
