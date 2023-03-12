import { Repository } from 'typeorm';
import { Address, Category, RealEstate } from '../../entities';
import { AppDataSource } from '../../data-source';
import {
  ICreateRealEstate,
  ICreateRealEstateSingleReturn,
} from '../../interfaces/realEstate.interfaces';
import { addressReturnSchema, returnRealEstateSchemas } from '../../schemas/realEstate.schemas';

export const createRealEstateService = async (realEstateData: ICreateRealEstate): Promise<ICreateRealEstateSingleReturn> => {

  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  const newAddress = addressRepository.create(realEstateData.address);
  const addressSaved = await addressRepository.save(newAddress)

  const category = await categoryRepository.findOne({ where: { id: realEstateData.categoryId } });

  const realEstate = realEstateRepository.create({
    ...realEstateData,
    address: addressSaved.id,
    category: realEstateData.categoryId
  })
  await realEstateRepository.save(realEstate)

  console.log(realEstate);

  return returnRealEstateSchemas.parse({
    ...realEstate,
    address: addressReturnSchema.parse(addressSaved),
    category: category
  });
}







