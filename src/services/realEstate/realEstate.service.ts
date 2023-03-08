import { Repository } from 'typeorm';
import { Address, RealEstateEntity } from '../../entities';
import { AppDataSource } from '../../data-source';
import { returnRealEstateSchemas } from '../../schemas';
import { ICreateRealEstate } from '../../interfaces/realEstate.interfaces';
import { addressReturnSchema } from '../../schemas/realEstate.schemas';


export const createRealEstateService = async (realEstateData: ICreateRealEstate): Promise<ICreateRealEstate> => {

  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
  const realEstateRepository: Repository<RealEstateEntity> = AppDataSource.getRepository(RealEstateEntity)

  const newAddress = addressRepository.create(realEstateData.address);
  const addressSaved = await addressRepository.save(newAddress)

  const realEstate = realEstateRepository.create({ ...realEstateData, address: addressSaved.id })
  await realEstateRepository.save(realEstate)

  return returnRealEstateSchemas.parse({ ...realEstate, address: addressReturnSchema.parse(addressSaved) });
}







