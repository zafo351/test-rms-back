import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from './domain/entities/task.entity';
import { TasksService } from './services/tasks/tasks.service';
import {  CalcuController } from './controllers/calcu.controller';
import { SumaService } from './services/sum/sum.service';
import { RestService } from './services/rest/rest.service';
import { MultService } from './services/mult/mult.service';
import { DiviService } from './services/divi/divi.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Task])
  ],
  providers: [TasksService, SumaService, RestService, MultService, DiviService],
  controllers: [CalcuController]
})
export class TasksModule {}