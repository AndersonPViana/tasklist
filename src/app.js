import express from "express";
import cors from "cors";

import routes from "./app/routes/routes";

import "./database";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server on !");
});
