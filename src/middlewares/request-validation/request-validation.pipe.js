/* eslint-disable no-unused-vars */
import { validate } from 'class-validator';
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class RequestValidationPipe {
  Dto;

  constructor(dto) {
    this.Dto = dto;
  }

  async transform(value, metadata) {
    if(!value?.isPromotion && value?.discount) 
      throw new BadRequestException("If 'isPromotion' is false, 'discount' should not be provided.");
    

    const productDto = new this.Dto();
    Object.assign(productDto, value);

    const errors = await validate(productDto);
    if(errors.length > 0) {
      let errorMessages = '';
      errors.forEach(error => {
        const { constraints } = error;
        if(constraints) {
          Object.values(constraints).forEach(constraint => {
            errorMessages += `${error.property}: ${constraint}, `;
          });
        }
      });
      throw new BadRequestException(errorMessages);
    }

    return value;
  }
}
