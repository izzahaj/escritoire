import { create, findAll, findById, update, remove } from "../controllers/chapter.controller.js";
import { Router } from "express";
import apiUrl from "./api-url.js";

const ChapterRoutes = app => {
  var router = Router();

  router.post("/", create);
  router.get("/", findAll);
  router.get("/:id", findById);
  router.put("/:id", update);
  router.delete("/:id", remove);

  app.use(apiUrl.concat("/chapter"), router);
};

export default ChapterRoutes;