import { useState } from "react";
import "./styles.css";

function App() {
	const [newItem, setNewItem] = useState("");

	return (
		<>
			<form onSubmit={() => {}} className="new-item-form">
				<div className="form-row">
					<label htmlFor="item">New Item</label>
					<input
						value={newItem}
						onChange={() => {}}
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
							// checked={false}
							onChange={() => {}}
						/>
						{"Todo Item Title"}
					</label>
					<button onClick={() => {}} className="btn btn-danger">
						Delete
					</button>
				</li>
			</ul>
		</>
	);
}

export default App;
