const { Router } = require("express");

const convidadosRoutes = require("./convidados.routes");

const routes = Router();

routes.use("/convidados", convidadosRoutes);

module.exports = routes;
