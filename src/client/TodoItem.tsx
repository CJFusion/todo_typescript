export interface TodoItemProps {
	_id: string;
	title: string;
	completed: boolean;
}

export interface TodoItemActions {
	toggleTodo: (id: string, checked: boolean) => void;
	deleteTodo: (id: string) => void;
}

export function TodoItem({
	completed,
	_id: id,
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
