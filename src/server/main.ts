import express from "express";
import mongoose from "mongoose";
import todosRoute from "./routes/todosRoute.js";
// import cors from "cors";
import ViteExpress from "vite-express";

const mongoDBURL =
	"mongodb+srv://root:todoRoot@webdeckcluster.vhp6ax5.mongodb.net/todoDB?retryWrites=true&w=majority";
const app = express();

app.use(express.json());
app.use(express.static(process.cwd() + "/dist"));
app.set("port", process.env.PORT || 3000);

// app.use(cors());

app.use("/todos", todosRoute);

app.get("/hello", (_, res) => {
	res.send("Hello Vite + React + TypeScript!");
});

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("App connected to database");

		// ViteExpress.listen(app, app.get("port"), () =>
		// 	console.log(`Server is running on port ${app.get("port")}`)
		// );

		app.listen(app.get("port"), () =>
			console.log(`Server is running on port ${app.get("port")}`)
		);
	})
	.catch((error) => {
		console.log(error);
	});
