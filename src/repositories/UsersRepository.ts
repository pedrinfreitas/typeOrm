import { EntityRepository, Repository } from 'typeorm';
import Users from '../models/Users';

@EntityRepository(Users)
export default class ClassRepository extends Repository<Users> {
  public async findByName(name: string): Promise<Users[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}