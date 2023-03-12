import { AppDataSource } from '../../data-source';
import { Repository } from 'typeorm';
import { Category } from '../../entities';
import { categoryRealEstateSchema } from '../../schemas';
import { AppError } from '../../errors';


export const listCategoriesRealEstateService = async (categoryId: number) => {

  const categoriesRealEstateRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const categories = await categoriesRealEstateRepository.findOne({
    where: {
      id: categoryId
    },
    relations: ['realEstates']
  })

  if(!categories) throw new AppError('Category not found', 404);

  return categoryRealEstateSchema.parse(categories)
}
