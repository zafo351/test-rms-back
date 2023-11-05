import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('calculus')
export class Calculus {
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
