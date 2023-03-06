import{Repository} from 'typeorm';
import { ICategories } from '../../interfaces';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { returnCategoriesSchemas } from '../../schemas';


export const createCategoryService = async(categoryData:ICategories):Promise<ICategories> =>{
  const categoryRepository:Repository<Category> = AppDataSource.getRepository(Category)

  const category = categoryRepository.create(categoryData)

  await categoryRepository.save(category)

  return returnCategoriesSchemas.parse(category)
}
