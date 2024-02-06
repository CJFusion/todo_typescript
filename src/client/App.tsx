import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { TodoItemProps } from "./TodoItem";

export default function App() {
	const [todos, setTodos] = useState<TodoItemProps[]>([]);

	function addTodo(title: string) {
		setTodos((currentTodos: TodoItemProps[]) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
	}

	function toggleTodo(id: number, completed: boolean) {
		setTodos((currentTodos: TodoItemProps[]) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}

				return todo;
			});
		});
	}

	function deleteTodo(id: number) {
		setTodos((currentTodos: TodoItemProps[]) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
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
