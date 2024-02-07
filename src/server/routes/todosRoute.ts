import express from "express";
import { TodoModel } from "../models/todo.model.js";

const router = express.Router();

// Route for Save a new Todo Item
router.post("/", async (request, response) => {
	try {
		if (!request.body.title || !("completed" in request.body)) {
			return response.status(400).send({
				message: "Send all required fields: title, completed",
			});
		}
		const todoItem = {
			title: request.body.title,
			completed: request.body.completed,
		};

		const newTodo = await TodoModel.create(todoItem);

		return response.status(201).send(newTodo);
	} catch (error: any) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// Route for Get All Todos from database
router.get("/", async (request, response) => {
	try {
		const todos = await TodoModel.find({});

		return response.status(200).json({
			count: todos.length,
			data: todos,
		});
	} catch (error: any) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// Route for Get One Todo from database by id
router.get("/:id", async (request, response) => {
	try {
		const { id } = request.params;

		const todo = await TodoModel.findById(id);
		return response.status(200).json(todo);
	} catch (error: any) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// Route for Updating a Todo
router.put("/:id", async (request, response) => {
	try {
		if (!("completed" in request.body)) {
			return response.status(400).send({
				message: "Send all required fields: completed",
			});
		}

		const { id } = request.params;

		const result = await TodoModel.findByIdAndUpdate(id, request.body);

		if (!result) {
			return response.status(404).json({ message: "Todo not found" });
		}

		return response
			.status(200)
			.send({ message: "Todo updated successfully" });
	} catch (error: any) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// Route for Deleting a Todo
router.delete("/:id", async (request, response) => {
	try {
		const { id } = request.params;

		const result = await TodoModel.findByIdAndDelete(id);

		if (!result) {
			return response.status(404).json({ message: "Todo not found" });
		}

		return response
			.status(200)
			.send({ message: "Todo deleted successfully" });
	} catch (error: any) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

export default router;
