import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('text')
  name: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { select: false })
  password: string;

  @Column('int',{ nullable: true })
  age: number;

  @Column('text')
  phone: string;

  @Column('boolean', { default: false })
  isVerified: boolean;
}
