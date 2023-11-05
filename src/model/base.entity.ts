import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class postgresdata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number1: number;

  @Column()
  operator: string;

  @Column()
  number2: number;

  @Column()
  result: number;

  @Column()
  Date: Date;
}
