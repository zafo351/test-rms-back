import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../domain/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateService {
  constructor(
    @InjectRepository(Task)
    private updateRepository: Repository<Task>,
  ) {}

  async update(id: number, body: any) {
    const task = await this.updateRepository.findOneBy({id});
    this.updateRepository.merge(task, body);
    return this.updateRepository.save(task);
  }
}
