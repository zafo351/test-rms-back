import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { SumaService } from '../services/sum/sum.service';
import { RequestDTO } from '../domain/dto/requestDTO';
import { RestService } from '../services/rest/rest.service';
import { MultService } from '../services/mult/mult.service';
import { DiviService } from '../services/divi/divi.service';

@Controller('api/tasks')
export class CalcuController {

  constructor(
    private readonly sumaService: SumaService,
    private readonly restaService: RestService,
    private readonly multiService: MultService,
    private readonly diviService: DiviService
  ) {}

  @Post('/sum')
  postSum(@Body() requestDTO: RequestDTO) {
    return this.sumaService.postSuma(requestDTO);
  }

  @Post('/rest')
  postRest(@Body() requestDTO: RequestDTO) {
    return this.restaService.postRest(requestDTO);
  }

  @Post('/mult')
  postMulti(@Body() requestDTO: RequestDTO){
    return this.multiService.postMulti(requestDTO);
  }

  @Post('/divi')
  postDivi(@Body() requestDTO: RequestDTO){
    return this.diviService.postDivi(requestDTO);
  }

}