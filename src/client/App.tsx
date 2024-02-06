import { useState } from "react";

function App() {
	const [newItem, setNewItem] = useState("");

	return (
		<>
			<form onSubmit={() => {}}>
				<div>
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

			<h1>Todo List</h1>
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
					<button onClick={() => {}}>Delete</button>
				</li>
			</ul>
		</>
	);
}

export default App;
