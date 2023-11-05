import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import config from './config/config.service';
import { SumaService } from './services/sum.service';
import { RestaService } from './services/rest.service';
import { MultiService } from './services/mult.service';
import { DiviService } from './services/divi.service';
import { postgresdata } from './model/base.entity';
import { DatabaseModule } from './domain/modules/database.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [postgresdata],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [SumaService, RestaService, MultiService, DiviService],
  exports: [TypeOrmModule],
})
export class AppModule {}
