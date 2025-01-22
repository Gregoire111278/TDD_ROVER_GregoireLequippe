import {Test, TestingModule} from '@nestjs/testing';
import {RoverService} from './rover.service';

describe('RoverService', () => {
    let service: RoverService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RoverService],
        }).compile();
        service = module.get<RoverService>(RoverService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should works', () => {
        const plateau = [5, 5];
        const rovers = [
            {position: '1 2 N', commands: 'LMLMLMLMM'},
            {position: '3 3 E', commands: 'MMRMMRMRRM'},
        ];
        expect(service.commandsLogic(plateau, rovers)).toEqual(['1 3 N', '5 1 E']);
    });

    it('should turn left', () => {
        expect(service.turn('N', 'L')).toBe('W');
        expect(service.turn('W', 'L')).toBe('S');
        expect(service.turn('S', 'L')).toBe('E');
        expect(service.turn('E', 'L')).toBe('N');
    });

    it('should turn right', () => {
        expect(service.turn('N', 'R')).toBe('E');
        expect(service.turn('E', 'R')).toBe('S');
        expect(service.turn('S', 'R')).toBe('W');
        expect(service.turn('W', 'R')).toBe('N');
    });

    it('should move', () => {
        expect(service.move([1, 2], 'N')).toEqual([1, 3]);
        expect(service.move([1, 2], 'E')).toEqual([2, 2]);
        expect(service.move([1, 2], 'S')).toEqual([1, 1]);
        expect(service.move([1, 2], 'W')).toEqual([0, 2]);
    });


});
