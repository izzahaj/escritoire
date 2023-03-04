import { create, findAll, findById, update, remove } from "../controllers/work.controller.js";
import { Router } from "express";
import apiUrl from "./api-url.js";

const WorkRoutes = app => {
  var router = Router();

  router.post("/", create);
  router.get("/", findAll);
  router.get("/:id", findById);
  router.put("/:id", update);
  router.delete("/:id", remove);

  app.use(apiUrl.concat("/works"), router);
};

export default WorkRoutes;