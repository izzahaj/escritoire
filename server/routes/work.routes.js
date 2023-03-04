import { Router } from 'express';
import {
  create,
  findAll,
  findById,
  update,
  remove,
} from '../controllers/work.controller';
import apiUrl from './api-url';

const WorkRoutes = (app) => {
  const router = Router();

  router.post('/', create);
  router.get('/', findAll);
  router.get('/:id', findById);
  router.put('/:id', update);
  router.delete('/:id', remove);

  app.use(apiUrl.concat('/works'), router);
};

export default WorkRoutes;
