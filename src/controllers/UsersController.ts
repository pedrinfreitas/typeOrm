import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';


export = {

  async index(req: Request, res: Response) {
    try {
      const result = await getRepository(Users).find();
      return res.status(200).json(result);
    } catch (err) {
      console.log('err.message =>> ', err.message);
    }
  },

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await getRepository(Users).findOne({
        where: { id }
      });
      return res.status(200).json(result);
    } catch (err) {
      console.log('err.message =>> ', err.message);
    }
  },

  async showName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const result = await getRepository(Users).find({
        where: { name: name }
      });
      return res.status(200).json(result);
    } catch (err) {
      console.log('err.message =>> ', err.message);
    }
  },

  async new(req: Request, res: Response) {
    try {
      const result = await getRepository(Users).save(req.body);
      return res.status(201).json(result);
    } catch (err) {
      console.log('err.message =>> ', err.message);
    }
  }

}
