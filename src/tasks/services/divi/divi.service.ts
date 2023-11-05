import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../domain/entities/task.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../../domain/dto/requestDTO';

@Injectable()
export class DiviService {
  constructor(
    @InjectRepository(Task)
    private diviRepository: Repository<Task>,
  ) {}
  postDivi(requestDTO: RequestDTO){
    if (requestDTO.operacion == '/') {
      const exito = requestDTO.number1 / requestDTO.number2;
      const newCalc = this.diviRepository.create({
        number1: requestDTO.number1,
        number2: requestDTO.number2,
        operator: requestDTO.operacion,
        result: exito,
      });
      const responseDB = this.diviRepository.save(newCalc);
      console.log(responseDB);
      return exito;
    }
  }
}
