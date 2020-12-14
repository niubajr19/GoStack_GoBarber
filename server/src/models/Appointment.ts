import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// Sempre que atualizado, será salvo na tabela 'appointments'
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

  // Criado de forma automática no TypeOrm
  // constructor({ provider, date }: Omit<Appointment, 'id'>) {
  //   this.id = uuid();
  //   this.provider = provider;
  //   this.date = date;
  // }
}

export default Appointment;
