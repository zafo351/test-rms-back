import { Test, TestingModule } from '@nestjs/testing';
import { SumaService } from '../../../../src/tasks/services/sum/sum.service';

describe('SumService', () => {
  let service: SumaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumaService],
    }).compile();

    service = module.get<SumaService>(SumaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
