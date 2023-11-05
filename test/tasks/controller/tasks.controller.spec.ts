import { Test, TestingModule } from '@nestjs/testing';
import { CalcuController } from '../../../src/tasks/controllers/calcu.controller';

describe('TasksController', () => {
  let controller: CalcuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalcuController],
    }).compile();

    controller = module.get<CalcuController>(CalcuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
