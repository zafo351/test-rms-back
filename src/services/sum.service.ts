import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calculus } from '../model/base.entity';
import { Repository } from 'typeorm';
import { RequestDTO } from '../domain/request.dto';

@Injectable()
export class SumaService {
  constructor(
    @InjectRepository(Calculus)
    private postRepository: Repository<Calculus>,
  ) {}

  async postSuma(requestDTO: RequestDTO): Promise<Calculus>{
    const post = new Calculus();
    const exito = requestDTO.number1 + requestDTO.number2;
    post.number1 = requestDTO.number1;
    post.number2 = requestDTO.number1;
    post.operator = requestDTO.operacion;
    post.result = exito;
    
    return this.postRepository.save(post);;
  }
}
