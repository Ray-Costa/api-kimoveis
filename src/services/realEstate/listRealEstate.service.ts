import { ICreateRealEstate, IRealEstateReturn } from '../../interfaces/realEstate.interfaces';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Address, RealEstateEntity } from '../../entities';
import { allRealEstateSchema } from '../../schemas';


export const listAllRealEstateService = async (): Promise<IRealEstateReturn> => {

  const realEstateRepository:Repository<RealEstateEntity> = AppDataSource.getRepository(RealEstateEntity)
  const realEstate = await realEstateRepository.find({
    relations: ['address', 'category']
  })
  console.log(realEstate)
  return allRealEstateSchema.parse(realEstate)
}

