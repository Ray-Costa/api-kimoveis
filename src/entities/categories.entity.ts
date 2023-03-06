import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RealEstateEntity } from './realEstate.entity';

@Entity('categories')

export class Category {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 45, unique: true })
  name: string

  @OneToMany(() => RealEstateEntity, realEstate => realEstate.category)
  realEstates: RealEstateEntity[]

}
