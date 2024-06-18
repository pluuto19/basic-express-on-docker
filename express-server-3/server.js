const express = require("express");
const app = express();
let counter = 1;

app.use(express.static("public"));

app.get("/load", (req, res) => {
	console.log(`Total Requests ${counter++}`);
	res.status(200).end();
});
app.get("/health", (req, res) => {
	console.log("Health Checking");
	res.status(200).end();
});
app.listen(8006, () => {
	console.log("Server is Live");
});
