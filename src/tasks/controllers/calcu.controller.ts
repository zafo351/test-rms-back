import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { SumaService } from '../services/sum/sum.service';
import { RequestDTO } from '../domain/dto/requestDTO';
import { RestService } from '../services/rest/rest.service';
import { MultService } from '../services/mult/mult.service';
import { DiviService } from '../services/divi/divi.service';
import { ExamineService } from '../services/examine/examine.service';
import { DeleteService } from '../services/delete/delete.service';
import { UpdateService } from '../services/update/update.service';
import { Query } from 'typeorm/driver/Query';

@Controller('api/tasks')
export class CalcuController {

  constructor(
    private readonly sumaService: SumaService,
    private readonly restaService: RestService,
    private readonly multiService: MultService,
    private readonly diviService: DiviService,
    private readonly examineService: ExamineService,
    private readonly deleteService: DeleteService,
    private readonly updateService: UpdateService
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

  @Get('/examine')
  getExamine(){
    return this.examineService.findAll();
  }

  @Get('/examine/one/id')
  getExamineOne(@Param('id') id: number){
    return this.examineService.findOne(id);
  }

  @Put('/update/one/id')
  update(@Param('id') id: number, @Body() requestDTO:RequestDTO) {
    return this.updateService.update(id, requestDTO);
  }

  @Delete('/delete/one/id')
  delete(@Param('id') id: number) {
    return this.deleteService.remove(id);
  }

}