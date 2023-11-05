import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { postgresdata } from '../model/base.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../domain/dto/request.dto';

@Injectable()
export class DiviService {
  constructor(
    @InjectRepository(postgresdata)
    private diviRepository: Repository<postgresdata>,
  ) {}
  postDivi(requestDTO): any {
    if (requestDTO.operacion == '/') {
      const exito = requestDTO.number1 - requestDTO.number2;
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
