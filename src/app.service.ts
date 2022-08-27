import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return 'This API created from app "Humans". \n Version: 0.0.1';
  }
}
