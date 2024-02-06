import { TodoItem, TodoItemProps, TodoItemActions } from "./TodoItem";

interface TodoListProps {
	todos: TodoItemProps[];
}

export function TodoList({
	todos,
	toggleTodo,
	deleteTodo,
}: TodoListProps & TodoItemActions) {
	return (
		<ul className="list">
			{todos.length === 0 && "No Todos"}
			{todos.map((todo) => {
				return (
					<TodoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				);
			})}
		</ul>
	);
}
