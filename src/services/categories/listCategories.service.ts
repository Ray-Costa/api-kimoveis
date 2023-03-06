import { ICategoriesReturn } from '../../interfaces';
import { AppDataSource } from '../../data-source';
import { allCategoriesSchema } from '../../schemas';
import { Category } from '../../entities';


export const listCategoriesService = async (): Promise<ICategoriesReturn> => {

  const categoriesRepository = AppDataSource.getRepository(Category)

  const categories = await categoriesRepository.find()

  const allCategories = allCategoriesSchema.parse(categories)

  return allCategories
}
