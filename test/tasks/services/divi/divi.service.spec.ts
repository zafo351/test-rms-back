import { Test, TestingModule } from '@nestjs/testing';
import { DiviService } from '../../../../src/tasks/services/divi/divi.service';

describe('DiviService', () => {
  let service: DiviService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiviService],
    }).compile();

    service = module.get<DiviService>(DiviService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
