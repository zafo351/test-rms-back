import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { postgresdata } from '../model/base.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../domain/dto/request.dto';

@Injectable()
export class RestaService {
  constructor(
    @InjectRepository(postgresdata)
    private restaRepository: Repository<postgresdata>,
  ) {}
  postRest(requestDTO: RequestDTO) {
    if (requestDTO.operacion == '-') {
      const exito = requestDTO.number1 - requestDTO.number2;
      const newCalc = this.restaRepository.create({
        number1: requestDTO.number1,
        number2: requestDTO.number2,
        operator: requestDTO.operacion,
        result: exito,
      });
      const responseDB = this.restaRepository.save(newCalc);
      console.log(responseDB);
      return exito;
    }
  }
}
