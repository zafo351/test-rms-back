import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import config from './config/config.service';
import { SumaService } from './services/sum.service';
import { RestaService } from './services/rest.service';
import { MultiService } from './services/mult.service';
import { DiviService } from './services/divi.service';
import { Calculus } from './model/base.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: 'postgres',
        host: configService.host,
        port: configService.port,
        username: configService.username,
        password: configService.password,
        database: configService.database,
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [config.KEY],
    }),
  ],
  controllers: [AppController],
  providers: [SumaService, RestaService, MultiService, DiviService],
})
export class AppModule {}
