import { Test, TestingModule } from '@nestjs/testing';
import { ExamineService } from './examine.service';

describe('ExamineService', () => {
  let service: ExamineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamineService],
    }).compile();

    service = module.get<ExamineService>(ExamineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
