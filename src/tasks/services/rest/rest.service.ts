import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../domain/entities/task.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../../domain/dto/requestDTO';

@Injectable()
export class RestService {
  constructor(
    @InjectRepository(Task)
    private restaRepository: Repository<Task>,
  ) {}
  postRest(requestDTO:RequestDTO) {
    if (requestDTO.operacion == '-') {
      const exito = requestDTO.number1 - requestDTO.number2;
      const newCalc = this.restaRepository.create({
        number1: requestDTO.number1,
        number2: requestDTO.number2,
        operator: requestDTO.operacion,
        result: exito,
        Date: new Date(),
      });
      const responseDB = this.restaRepository.save(newCalc);
      console.log(responseDB);
      return exito;
    }else return 'Falla de datos: '+BadRequestException;
  }
}
