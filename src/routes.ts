import { Router } from "express";
import path from "path";


import { CreateUserController } from "./controllers/CreateUserController";
import { GetAddressByCEPController } from "./controllers/GetAddressByCEPController";
import { GetWeatherDataController } from "./controllers/GetWeatherDataController";


const router = Router();

const createUserController = new CreateUserController();
const getAddressByCEPController =  new GetAddressByCEPController();
const getWeatherDataController =  new GetWeatherDataController();

router.post("/cadastrar", createUserController.handle);

router.get("/buscarCep/:cep", getAddressByCEPController.handle);
router.get("/buscarCidade/:cidade", getWeatherDataController.handle);

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/static', '/index.html'));
});


export { router };
