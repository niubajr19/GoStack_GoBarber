/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// Sempre que atualizado, será salvo na tabela 'appointments'
@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Criado de forma automática no TypeOrm
  // constructor({ provider, date }: Omit<Appointment, 'id'>) {
  //   this.id = uuid();
  //   this.provider = provider;
  //   this.date = date;
  // }
}

export default User;
