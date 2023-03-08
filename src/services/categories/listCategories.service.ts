import { ICategoriesReturn } from '../../interfaces';
import { AppDataSource } from '../../data-source';
import { allCategoriesSchema } from '../../schemas';
import { Category } from '../../entities';
import { Repository } from 'typeorm';


export const listCategoriesService = async (): Promise<ICategoriesReturn> => {

  const categoriesRepository:Repository<Category> = AppDataSource.getRepository(Category)

  const categories = await categoriesRepository.find()

  const allCategories = allCategoriesSchema.parse(categories)

  return allCategories
}
