import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../domain/entities/task.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from 'src/tasks/domain/dto/requestDTO';

@Injectable()
export class UpdateService {
  constructor(
    @InjectRepository(Task)
    private updateRepository: Repository<Task>,
  ) {}

  async update(id: number, requestDTO: RequestDTO) {
    const task = await this.updateRepository.findOneBy({id});
    this.updateRepository.merge(task, requestDTO);
    return this.updateRepository.save(task);
  }
}
