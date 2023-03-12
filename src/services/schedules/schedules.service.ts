import { RealEstate, Schedule } from '../../entities';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors';

export const createScheduleService = async (scheduleData: any | Date, userId: number): Promise<any | boolean> => {
  if (scheduleData.date < new Date()) {
    throw new AppError('Date must be greater than current date.', 409);
  }

  const schedulerepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

  const realEstate = await realEstateRepository.findOne({
    where: {
      id: scheduleData.realEstateId
    }
  })

  if (!realEstate) {
    throw new AppError('RealEstate not found', 404);
  }

  const newSchedule = schedulerepository.create({
    ...scheduleData,
    realEstate: scheduleData.realEstateId,
    user: userId
  });

  let dateFormatted = `${scheduleData.date.getFullYear()}-${scheduleData.date.getMonth() + 1}-${scheduleData.date.getDate()}`;
  const scheduleQueryBuilder = schedulerepository.createQueryBuilder('schedule')
    .select(['schedule.id'])
    .where('schedule.date = :date', { date: dateFormatted })
    .andWhere('schedule.hour = :hour', { hour: scheduleData.hour })
    .andWhere('schedule.realEstateId = :realEstateId', { realEstateId: scheduleData.realEstateId })

  const schedule = await scheduleQueryBuilder.getOne();

  if (schedule) {
    throw new AppError('Schedule to this real estate at this date and time already exists', 409);
  }

  const scheduleUserQueryBuilder = schedulerepository.createQueryBuilder('schedule')
    .select(['schedule.id'])
    .where('schedule.userId = :userId', { userId: userId })
    .andWhere('schedule.date = :date', { date: dateFormatted })
    .andWhere('schedule.hour = :hour', { hour: scheduleData.hour });

  const scheduleUser = await scheduleUserQueryBuilder.getMany();

  if (scheduleUser.length > 0) {
    throw new AppError('User schedule to this real estate at this date and time already exists', 409);
  }

  const hourSchedule = new Date(`1970-01-01T${scheduleData.hour}:00`).getHours()

  if (hourSchedule < 8 || hourSchedule >= 18) {
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
  }

  const weekdaySchedule = scheduleData.date.getDay()

  if (weekdaySchedule === 5 || weekdaySchedule === 6) {
    throw new AppError('Invalid date, work days are monday to friday', 400);
  }

  return await schedulerepository.save(newSchedule);
}
