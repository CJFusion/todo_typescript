import { useState } from "react";
import "./styles.css";

function App() {
	const [todos, setTodos] = useState([]);
	const [newItem, setNewItem] = useState("");

	function addTodo(title: string) {}

	function toggleTodo(id: string, completed: boolean) {}

	function deleteTodo(id: string) {}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (newItem === "") return;

		addTodo(newItem);

		setNewItem("");
	}

	let completed = false;
	const id = "tempId123";

	return (
		<>
			<form onSubmit={handleSubmit} className="new-item-form">
				<div className="form-row">
					<label htmlFor="item">New Item</label>
					<input
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
						type="text"
						id="item"
					/>
				</div>
				<button>Add</button>
			</form>

			<h1 className="header">Todo List</h1>
			<ul>
				<li>
					<label>
						<input
							type="checkbox"
							checked={completed}
							onChange={(e) => toggleTodo(id, e.target.checked)}
						/>
						{"Todo Item Title"}
					</label>
					<button
						onClick={() => deleteTodo(id)}
						className="btn btn-danger"
					>
						Delete
					</button>
				</li>
			</ul>
		</>
	);
}

export default App;
