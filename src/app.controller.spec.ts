import {Test, TestingModule} from '@nestjs/testing';

import {AppController} from './app.controller';
import {AppService} from './app.service';

describe('AppController', function () {
  let appController: AppController;

  beforeEach(async function () {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', function () {
    it('should return "Hello World!"', function () {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
