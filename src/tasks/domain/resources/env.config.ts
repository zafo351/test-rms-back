import { registerAs } from '@nestjs/config';
export default registerAs('configuration', () => ({
  PORT: parseInt(process.env.PORT, 10) || 8080,

  HOST: process.env.POSTGRES_HOST || 'localhost',
  PORTBS: parseInt(process.env.POSTGRES_PORT) || 5432,
  USER: process.env.POSTGRES_USER || 'postgresRms',
  PASS: process.env.POSTGRES_PASSWORD || 'PostgresRms',
  DATABS: process.env.POSTGRES_DATABASE || 'postgres',
}));
