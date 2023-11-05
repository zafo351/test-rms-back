import { DataSource } from 'typeorm';
import { postgresdata } from '../../model/base.entity';

export const photoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(postgresdata),
    inject: ['DATA_SOURCE'],
  },
];