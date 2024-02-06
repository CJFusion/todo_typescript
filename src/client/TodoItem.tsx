export interface TodoItemProps {
	id: number;
	title: string;
	completed: boolean;
}

export interface TodoItemActions {
	toggleTodo: (id: number, checked: boolean) => void;
	deleteTodo: (id: number) => void;
}

export function TodoItem({
	completed,
	id,
	title,
	toggleTodo,
	deleteTodo,
}: TodoItemProps & TodoItemActions) {
	return (
		<li>
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={(e) => toggleTodo(id, e.target.checked)}
				/>
				{title}
			</label>
			<button onClick={() => deleteTodo(id)} className="btn btn-danger">
				Delete
			</button>
		</li>
	);
}
