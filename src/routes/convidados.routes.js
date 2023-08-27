const { Router } = require("express");

const ConvidadosController = require("../controllers/ConvidadosController");

const convidadosRoutes = Router();

const convidadosController = new ConvidadosController();

convidadosRoutes.get("/", convidadosController.index);
convidadosRoutes.post("/", convidadosController.create);
convidadosRoutes.delete("/:id", convidadosController.delete);

module.exports = convidadosRoutes;
