import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Users from '../models/Users';
import UsersRepository from '../repositories/UsersRepository'
import UsersController from '../controllers/UsersController'

const usersRouter = Router();

usersRouter.get('/index', UsersController.index);
usersRouter.get('/id/:id', UsersController.show);
usersRouter.get('/name/:name', UsersController.showName);
usersRouter.post('/new', UsersController.new);

export default usersRouter;