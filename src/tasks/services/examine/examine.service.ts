import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../domain/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamineService {
  constructor(@InjectRepository(Task) private examineRepo: Repository<Task>) {}

  findAll() {
    return this.examineRepo.find();
  }

  findOne(id: number) {
    return this.examineRepo.findOneBy({ id });
  }
}
