import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiKeyService {
  public isKeyValid(key: string) {
    return process.env.API_SECRET ? key === process.env.API_SECRET : true;
  }
}
