import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string | null): string {
    return `Hello ${name || 'World'}!`;
  }
}
