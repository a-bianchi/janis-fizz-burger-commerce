/* eslint-disable no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueryParamPipe {
  transform(value, metadata) {
    const {
      name,
      type,
      priceFrom,
      priceTo,
      isPromotion,
      orderBy,
      orderDirection
    } = value;
    const query = {};

    if(name)
      query.name = { $regex: name, $options: 'i' };

    if(type)
      query.type = type;

    if(priceFrom !== undefined && priceTo !== undefined)
      query.price = { $gte: priceFrom, $lte: priceTo };
    else if(priceFrom !== undefined)
      query.price = { $gte: priceFrom };
    else if(priceTo !== undefined)
      query.price = { $lte: priceTo };

    if(isPromotion !== undefined)
      query.isPromotion = isPromotion;

    const sort = {};
    if(orderBy && ['name', 'price', 'type', 'discount'].includes(orderBy)) {
      if(['desc', 'asc'].includes(orderDirection.toLowerCase()))
        sort[orderBy] = orderDirection === 'desc' ? -1 : 1;
    }

    return {
      query,
      sort
    };
  }
}
