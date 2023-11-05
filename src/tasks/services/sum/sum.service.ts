import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../domain/entities/task.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../../domain/dto/requestDTO';
import { STATUS_CODES } from 'http';

@Injectable()
export class SumaService {
  constructor(
    @InjectRepository(Task)
    private sumaRepository: Repository<Task>,
  ) {}

  postSuma(requestDTO: RequestDTO) {
    if (requestDTO.operacion == '+') {
      const exito = requestDTO.number1 + requestDTO.number2;
      const newCalc = this.sumaRepository.create({
        number1: requestDTO.number1,
        number2: requestDTO.number2,
        operator: requestDTO.operacion,
        Date: new Date(),
        result: exito,
      });
      const responseDB = this.sumaRepository.save(newCalc);
      console.log(responseDB);
      return exito;
    } else return  'error de body'+ BadRequestException

  }
}
