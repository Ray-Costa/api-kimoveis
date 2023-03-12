import {
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { RealEstate } from './realEstate.entity';
import { Schedule} from './schedulesUsersProperties.entity';

@Entity('users')

export class User {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 45 })
  name: string

  @Column({ length: 45, unique: true })
  email: string

  @Column({ default: false })
  admin: boolean

  @Column({ length: 120 })
  password: string

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @DeleteDateColumn()
  deletedAt: string

  @OneToMany(()=> Schedule, schedule => schedule.user)
  schedules: Schedule[]
}
