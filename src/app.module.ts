import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import  configuration  from './config/config.service';
import { SumaService } from './services/sum.service';
import { RestaService } from './services/rest.service';
import { MultiService } from './services/mult.service';
import { DiviService } from './services/divi.service';
import { Calculus } from './model/base.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [SumaService, RestaService, MultiService, DiviService],
})
export class AppModule {}
