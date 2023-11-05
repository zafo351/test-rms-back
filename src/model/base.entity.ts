import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class postgresdata extends Model {
  @Column
  number1: number;

  @Column
  operator: string;

  @Column
  number2: number;

  @Column
  result: number;

  @Column
  Date: Date;
}
