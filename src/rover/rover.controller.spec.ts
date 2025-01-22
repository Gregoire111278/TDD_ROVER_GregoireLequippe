import { Test, TestingModule } from '@nestjs/testing';
import { RoverController } from './rover.controller';
import { RoverService } from './rover.service';

describe('RoverController', () => {
  let controller: RoverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoverController],
      providers: [RoverService],
    }).compile();

    controller = module.get<RoverController>(RoverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
