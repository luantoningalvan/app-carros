require("dotenv").config();
require("./config/database");

const { errors } = require("celebrate");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

app.listen(port, () => {
  console.log(`Servidor rodando na URL http://localhost:${port}`);
});
