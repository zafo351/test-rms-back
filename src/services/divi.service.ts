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
    const result = requestDTO.number1 / requestDTO.number2;

    return result;
  }
}
