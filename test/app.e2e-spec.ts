import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';

import * as request from 'supertest';

import {AppModule} from './../src/app.module';

describe('AppController (e2e)', function () {
  let app: INestApplication;

  beforeEach(async function () {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', function () {
    return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
  });

  it('/?name=John (GET)', function () {
    return request(app.getHttpServer()).get('/?name=John').expect(200).expect('Hello John!');
  });
});
