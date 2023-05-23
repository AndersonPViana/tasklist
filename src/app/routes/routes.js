import { Router } from "express";

import authMiddleware from "../middleware/auth";

import UserController from "../controllers/UserController";
import SessionsController from "../controllers/SessionsController";
import TaskController from "../controllers/TaskController";

const routes = Router();

// USER
routes.post("/users", UserController.store);

// SESSIONS
routes.post("/sessions", SessionsController.store);

routes.use(authMiddleware);

// USER
routes.put("/users", UserController.update);

// TASKS
routes.post("/tasks", TaskController.store);
routes.get("/tasks", TaskController.index);
routes.put("/tasks/:task_id", TaskController.update);
routes.delete("/tasks/:task_id", TaskController.deleta);

export default routes;
