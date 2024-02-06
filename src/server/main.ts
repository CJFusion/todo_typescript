import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());

app.get("/hello", (_, res) => {
	res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, app.get("port"), () =>
	console.log(`Server is running on port ${app.get("port")}`)
);
