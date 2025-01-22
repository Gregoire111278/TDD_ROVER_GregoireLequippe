import {Injectable} from '@nestjs/common';
import {CreateRoverDto} from './dto/create-rover.dto';
import {UpdateRoverDto} from './dto/update-rover.dto';

@Injectable()
export class RoverService {
    create(createRoverDto: CreateRoverDto) {
        return 'This action adds a new rover';
    }

    findAll() {
        return `This action returns all rover`;
    }

    findOne(id: number) {
        return `This action returns a #${id} rover`;
    }

    update(id: number, updateRoverDto: UpdateRoverDto) {
        return `This action updates a #${id} rover`;
    }

    remove(id: number) {
        return `This action removes a #${id} rover`;
    }

    private headings = ['N', 'E', 'S', 'W'];


    commandsLogic(plateau: number[], rovers: { position: string; commands: string }[]) {
        return rovers.map((rover) => {
            const [x, y, heading] = rover.position.split(' ');
            let positionX = parseInt(x);
            let positionY = parseInt(y);
            let currentHeading = heading;

            rover.commands.split('').forEach((command) => {
                if (command === 'L' || command === 'R') {
                    currentHeading = this.turn(currentHeading, command);
                } else if (command === 'M') {
                    const newPosition = this.move([positionX, positionY], currentHeading);
                    positionX = newPosition[0];
                    positionY = newPosition[1];
                }
            });
            return `${positionX} ${positionY} ${currentHeading}`;
        });
    }

     turn(currentHeading: string, direction: string) {
        const currentIndex = this.headings.indexOf(currentHeading);
        const directionIndex = direction === 'L' ? -1 : 1;
        const newIndex = (currentIndex + directionIndex + this.headings.length) % this.headings.length;
        return this.headings[newIndex];
    }

     move(position: number[], heading: string) {
        const [x, y] = position;
        switch (heading) {
            case 'N':
                return [x, y + 1];
            case 'E':
                return [x + 1, y];
            case 'S':
                return [x, y - 1];
            case 'W':
                return [x - 1, y];
            default:
                return position;
        }
    }
}