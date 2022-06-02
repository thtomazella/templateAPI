import { Router } from "express";
import path from "path";

import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

router.post("/cadastrar", createUserController.handle);

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/static', '/index.html'));
});


export { router };
