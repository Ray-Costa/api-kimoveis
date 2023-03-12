import { IRealEstateReturn } from '../../interfaces/realEstate.interfaces';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';
import { allRealEstateSchema } from '../../schemas';


export const listAllRealEstateService = async (): Promise<IRealEstateReturn> => {

  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  const realEstate = await realEstateRepository.find({
    relations: ['address', 'category']
  })
  return allRealEstateSchema.parse(realEstate)
}

