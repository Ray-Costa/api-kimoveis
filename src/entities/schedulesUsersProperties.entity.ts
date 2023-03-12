import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './users.entity';
import { RealEstate } from './realEstate.entity';

@Entity('schedules_users_properties')

export class Schedule {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'date' })
  date: string

  @Column({ type: 'time' })
  hour: string

  @ManyToOne(() => User, user => user.schedules)
  user: User | number

  @ManyToOne(()=> RealEstate, realEstate => realEstate.schedules)
  realEstate: RealEstate | number
}



