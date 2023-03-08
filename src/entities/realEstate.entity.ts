import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Address } from './addresses.entity';
import { ScheduleUsersProperty } from './schedulesUsersProperties.entity';
import { Category } from './categories.entity';

@Entity('real_estate')

export class RealEstateEntity {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ default: false })
  sold: boolean

  @Column('decimal', { precision: 12, scale: 2 })
  value: number

  @Column()
  size: number

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @OneToMany(() => ScheduleUsersProperty, schedule => schedule.user)
  schedules: ScheduleUsersProperty[]

  @OneToOne(() => Address, { nullable: true })
  @JoinColumn()
  address: Address | number

  @ManyToOne(() => Category, category => category.realEstates)
  category: Category | number
}
