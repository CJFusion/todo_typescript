import mongoose, { Schema } from "mongoose";

export interface TodoInterface {
	title: string;
	completed: boolean;
}

const TodoSchema = new Schema({
	title: { type: String, required: true },
	completed: { type: Boolean, default: false },
});

export const TodoModel = mongoose.model<TodoInterface>("Todo", TodoSchema);
