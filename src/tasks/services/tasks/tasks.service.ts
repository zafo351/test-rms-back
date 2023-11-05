import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../domain/entities/task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task) private tasksRepo: Repository<Task>,
  ) {}

  findAll() {
    return this.tasksRepo.find();
  }



  async remove(id: number) {
    await this.tasksRepo.delete(id);
    return true;
  }
}
