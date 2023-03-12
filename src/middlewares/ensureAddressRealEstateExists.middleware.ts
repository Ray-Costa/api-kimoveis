import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors';
import { Repository } from 'typeorm';
import { Address } from '../entities';
import { AppDataSource } from '../data-source';

export const ensureAddressRealEstateExistsMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

  const addressRealEstate = request.body.address;

  const findAddress = await addressRepository.findOne({
    where: {
      ...addressRealEstate
    }
  })

  if (findAddress) {
    throw new AppError('Address already exists', 409)
  }

  return next()
}
