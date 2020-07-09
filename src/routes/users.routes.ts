import { Router } from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Users);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err){
    console.log('err.message =>> ', err.message);    
  }
});

export default usersRouter;