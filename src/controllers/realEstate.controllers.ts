import { Request, Response } from 'express';
import { IRealEstate } from '../interfaces';
import { createRealEstateService } from '../services/realEstate/realEstate.service';
import { listAllRealEstateService } from '../services/realEstate/listRealEstate.service';


export const createRealEstateController = async (request: Request, response: Response): Promise<Response> => {

  const realEstateData: IRealEstate = request.body

  const newRealEstate = await createRealEstateService(realEstateData)

  return response.status(201).json(newRealEstate)
}

export const listAllRealEstateController = async (request: Request, response: Response): Promise<Response> => {

  const getAllRealEstate = await listAllRealEstateService()

  return response.json(getAllRealEstate)
}
