import {NextFunction, Request, Response} from 'express';
import {AppError} from '../errors';
import {Repository} from 'typeorm';
import {Category} from '../entities';
import {AppDataSource} from '../data-source';

export const ensureNameCategoryExistsMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const nameCategory = request.body.name;

  const findCategory = await categoryRepository.findOne({
    where: {
      name: nameCategory
    }
  })

  if (findCategory) {
    throw new AppError('Category already exists.', 409)
  }

  return next()

}


