import { ScheduleUsersProperty, User } from '../../entities';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';

export const createScheduleService = async (scheduleData: any, userId: number): Promise<any> => {

  const schedulerepository: Repository<ScheduleUsersProperty> = AppDataSource.getRepository(ScheduleUsersProperty)

  const newSchedule = schedulerepository.create({
    ...scheduleData,
    realEstate: scheduleData.realEstateId,
    user: userId
  });

  return await schedulerepository.save(newSchedule);
}
