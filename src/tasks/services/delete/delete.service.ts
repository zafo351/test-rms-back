import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../domain/entities/task.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DeleteService {
  constructor(
    @InjectRepository(Task)
    private deleteRepository: Repository<Task>,
  ) {}

  async remove(id: number) {
    await this.deleteRepository.delete(id);
    return true;
  }
}
