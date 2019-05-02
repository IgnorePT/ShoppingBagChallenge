const express = require("express");
const bodyParser = require("body-parser");


const router = require("./router/router");
const { allowCORS } = require("./middlewares/middlewares");

const port = 4000;
const app = express();

app.use(allowCORS);
app.use(bodyParser.json());


app.use("/", router);

app.listen(port, () => {
	console.log(`The server is running on ${port}`);
})