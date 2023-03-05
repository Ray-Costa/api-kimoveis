import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')

export class User {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 45 })
  name: string

  @Column({ length: 45, unique: true })
  email: string

  @Column({ default: false })
  admin?: boolean

  @Column({ length: 120 })
  password: string

  @Column({ default: true })
  active?: boolean

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @DeleteDateColumn()
  deletedAt: string
}
