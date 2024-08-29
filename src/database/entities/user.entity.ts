import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CreateUpdateModel } from './models/create-update.model';
import { RefreshTokenEntity } from './refresh-token.entity';

@Entity('Users')
export class UserEntity extends CreateUpdateModel {
  @Column('text')
  name: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { select: false })
  password: string;

  @Column('int', { nullable: true })
  age: number;

  @Column('text', { unique: true })
  phone: string;

  @Column('boolean', { default: false })
  isVerified: boolean;

  @Column('text', { nullable: true })
  image: string;

  @OneToMany(() => RefreshTokenEntity, (entity) => entity.user)
  refreshTokens?: RefreshTokenEntity[];
}
