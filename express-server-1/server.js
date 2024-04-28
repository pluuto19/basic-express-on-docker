const express = require("express");
const app = express();
let counter = 1;

app.use(express.static("public"));

app.get("/", (req, res) => {
	console.log(`Total Requests ${counter++}`);
	res.status(200);
});
app.get("/health", (req, res) => {
	console.log("Health Checking");
	res.status(200).end();
});
app.listen(80, () => {
	console.log("Server is Live");
});