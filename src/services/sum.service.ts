import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { postgresdata } from '../model/base.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../domain/dto/request.dto';
import { promises } from 'dns';

@Injectable()
export class SumaService {
  async postSuma(requestDTO: RequestDTO) {
    if ((requestDTO.operacion == '+')) {
      const exito = requestDTO.number1 + requestDTO.number2;
      return exito;
    }else 
    return 'operador fallido'
  }
}
