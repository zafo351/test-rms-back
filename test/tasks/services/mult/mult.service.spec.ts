import { Test, TestingModule } from '@nestjs/testing';
import { MultService } from '../../../../src/tasks/services/mult/mult.service';

describe('MultService', () => {
  let service: MultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultService],
    }).compile();

    service = module.get<MultService>(MultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
