import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
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