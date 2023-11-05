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
import { databaseProviders } from './domain/providers/database.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [SumaService, RestaService, MultiService, DiviService,databaseProviders],
})
export class AppModule {}
