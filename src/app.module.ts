import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoverModule } from './rover/rover.module';
import {RoverService} from "./rover/rover.service";
import {RoverController} from "./rover/rover.controller";

@Module({
  imports: [RoverModule],
  controllers: [AppController, RoverController],
  providers: [AppService, RoverService],
})
export class AppModule {

}
