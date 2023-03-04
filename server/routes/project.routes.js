import { Router } from 'express';
import {
  create, findAll, findById, update, remove,
} from '../controllers/project.controller';
import apiUrl from './api-url';

const ProjectRoutes = (app) => {
  const router = Router();

  router.post('/', create);
  router.get('/', findAll);
  router.get('/:id', findById);
  router.put('/:id', update);
  router.delete('/:id', remove);

  app.use(apiUrl.concat('/projects'), router);
};

export default ProjectRoutes;
