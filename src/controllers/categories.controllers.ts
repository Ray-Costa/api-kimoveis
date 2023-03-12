import { Request, Response } from 'express';
import { createCategoryService } from '../services/categories/categories.service';
import { ICategories } from '../interfaces';
import { listCategoriesService } from '../services/categories/listCategories.service';
import { listCategoriesRealEstateService } from '../services/categories/listCategoriesRealEstate.service';


export const createCategoryController = async (request: Request, response: Response) => {
  const categoryData: ICategories = request.body
  const newCategory = await createCategoryService(categoryData)
  return response.status(201).json(newCategory)
}

export const listCategoriesController = async (request: Request, response: Response): Promise<Response> => {

  const categories = await listCategoriesService()

  return response.json(categories)
}

export const listCategoriesRealEstateController = async (request: Request, response: Response): Promise<Response> => {

  const categoryId = parseInt(request.params.id)

  const listCategories = await listCategoriesRealEstateService(categoryId)

  return response.status(200).json(listCategories)

}
