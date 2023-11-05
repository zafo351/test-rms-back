import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresdata } from '../../model/base.entity';
import { SumaService } from '../../services/sum.service';
import { AppController } from '../../app.controller';
import { MultiService } from 'src/services/mult.service';
import { RestaService } from 'src/services/rest.service';
import { DiviService } from 'src/services/divi.service';

@Module({
  imports: [TypeOrmModule.forFeature([postgresdata])],
  providers: [SumaService, RestaService, MultiService, DiviService],
  controllers: [AppController],
})
export class DatabaseModule {}
