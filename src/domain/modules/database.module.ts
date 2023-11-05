import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresdata } from '../../model/base.entity';
import { SumaService } from '../../services/sum.service';
import { AppController } from '../../app.controller';
import configService from 'src/config/config.service';

@Module({
  imports: [],
  providers: [],
  controllers: [],
})
export class DatabaseModule {}
