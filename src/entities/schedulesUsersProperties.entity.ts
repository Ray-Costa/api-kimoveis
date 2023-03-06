import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './users.entity';
import { RealEstateEntity } from './realEstate.entity';

@Entity('schedules_users_properties')

export class ScheduleUsersProperty {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'date' })
  date: string

  @Column({ type: 'timestamp' })
  hour: string

  @ManyToOne(() => User, user => user.schedules)
  user: User

  @ManyToOne(()=> RealEstateEntity, realEstate => realEstate.schedules)
  realEstate: RealEstateEntity
}



