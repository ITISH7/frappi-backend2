const { entrypoint } = require("../controller/entrypointController");

const Router = require("express").Router();

Router.get("/",entrypoint)




module.exports = Router;