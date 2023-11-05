import { Injectable } from '@nestjs/common';

@Injectable()
export class MultiService {
  postMulti(requestDTO): any {
    const result = requestDTO.number1 * requestDTO.number2;

    return result;
  }
}
