import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { postgresdata } from '../model/base.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../domain/dto/request.dto';
import { promises } from 'dns';

@Injectable()
export class SumaService {
  constructor(
    @InjectRepository(postgresdata)
    private sumaRepository: Repository<postgresdata>,
  ) {}

  async postSuma(requestDTO: RequestDTO): Promise<postgresdata | any > {
    const post = new postgresdata();
    const exito = requestDTO.number1 + requestDTO.number2;
    post.number1 = requestDTO.number1;
    post.number2 = requestDTO.number1;
    post.operator = requestDTO.operacion;
    post.result = exito;
    const newUser = this.sumaRepository.create(post);
    const saved = this.sumaRepository.save(newUser);
    console.log(saved)
    return exito;
  }
}
