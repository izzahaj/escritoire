import { Router } from 'express';
import {
  create, findAll, findById, update, remove,
} from '../controllers/chapter.controller';
import apiUrl from './api-url';

const ChapterRoutes = (app) => {
  const router = Router();

  router.post('/', create);
  router.get('/', findAll);
  router.get('/:id', findById);
  router.put('/:id', update);
  router.delete('/:id', remove);

  app.use(apiUrl.concat('/chapter'), router);
};

export default ChapterRoutes;
