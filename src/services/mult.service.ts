import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { postgresdata } from '../model/base.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../domain/dto/request.dto';

@Injectable()
export class MultiService {
  constructor(
    @InjectRepository(postgresdata)
    private multiRepository: Repository<postgresdata>,
  ) {}
  postMulti(requestDTO): any {
    if (requestDTO.operacion == '*') {
      const exito = requestDTO.number1 - requestDTO.number2;
      const newCalc = this.multiRepository.create({
        number1: requestDTO.number1,
        number2: requestDTO.number2,
        operator: requestDTO.operacion,
        result: exito,
      });
      const responseDB = this.multiRepository.save(newCalc);
      console.log(responseDB);
      return exito;
    }
  }
}
