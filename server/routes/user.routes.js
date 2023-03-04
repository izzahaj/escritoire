import { Router } from 'express';
import {
  create, findAll, findById, update, remove,
} from '../controllers/user.controller';
import apiUrl from './api-url';

const UserRoutes = (app) => {
  const router = Router();

  router.post('/', create);
  router.get('/', findAll);
  router.get('/:id', findById);
  router.put('/:id', update);
  router.delete('/:id', remove);

  app.use(apiUrl.concat('/users'), router);
};

export default UserRoutes;
