import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class postgresdata {
  @PrimaryGeneratedColumn()
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
