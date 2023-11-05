import { Sequelize } from 'sequelize-typescript';
import { postgresdata } from '../../model/base.entity';

export const databaseProviders = [
  {
    provide: 'POSTGES_REPOSITORY',
    useValue: postgresdata,
  },
];