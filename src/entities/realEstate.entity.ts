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
import { Schedule } from './schedulesUsersProperties.entity';
import { Category } from './categories.entity';

@Entity('real_estate')

export class RealEstate {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ default: false })
  sold: boolean

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column()
  size: number

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @OneToMany(() => Schedule, schedule => schedule.realEstate)
  schedules: Schedule[]

  @OneToOne(() => Address, { nullable: true })
  @JoinColumn()
  address: Address | number

  @ManyToOne(() => Category, category => category.realEstates)
  category: Category | number
}
