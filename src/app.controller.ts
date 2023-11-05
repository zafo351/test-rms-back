import { Body, Controller, Post } from '@nestjs/common';
import { SumaService } from './services/sum.service';
import { RequestDTO } from './domain/request.dto';
import { RestaService } from './services/rest.service';
import { MultiService } from './services/mult.service';
import { DiviService } from './services/divi.service';

@Controller()
export class AppController {
  constructor(
    private readonly sumaService: SumaService,
    private readonly restaService: RestaService,
    private readonly multiService: MultiService,
    private readonly diviService: DiviService
  ) {}

  @Post('/sum')
  postSum(@Body() requestDTO: RequestDTO) {
    return this.sumaService.postSuma(requestDTO);
  }

  @Post('/rest')
  postRest(@Body() requestDTO: RequestDTO): string {
    return this.restaService.postRest(requestDTO);
  }

  @Post('/mult')
  postMulti(@Body() requestDTO: RequestDTO): string {
    return this.multiService.postMulti(requestDTO);
  }

  @Post('/divi')
  postDivi(@Body() requestDTO: RequestDTO): string {
    return this.diviService.postDivi(requestDTO);
  }
}
