import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';
import { realEstateSchedulesSchema } from '../../schemas';
import { AppError } from '../../errors';

export const listSchedulesRealStateService = async (realEstateId: number) => {

  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

  const schedules = await realEstateRepository.findOne({
    where: {
      id: realEstateId
    },
    relations: ['address', 'category', 'schedules', 'schedules.user']
  })

  if(!schedules) throw new AppError('RealEstate not found', 404);

  return realEstateSchedulesSchema.parse(schedules);

}


