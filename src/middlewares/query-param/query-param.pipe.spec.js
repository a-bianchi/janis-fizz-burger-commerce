import { QueryParamPipe } from './query-param.pipe';

describe('QueryParamPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new QueryParamPipe();
  });

  it('should transform query parameters correctly with name filter', () => {
    const queryParams = {
      name: 'Premium Patagonica'
    };
    const transformedParams = pipe.transform(queryParams, null);

    expect(transformedParams.query).toEqual({
      name: { $regex: 'Premium Patagonica', $options: 'i' }
    });
    expect(transformedParams.sort).toEqual({});
  });

  it('should transform query parameters correctly with type filter', () => {
    const queryParams = {
      type: 'burger'
    };
    const transformedParams = pipe.transform(queryParams, null);

    expect(transformedParams.query).toEqual({
      type: 'burger'
    });
    expect(transformedParams.sort).toEqual({});
  });

  it('should transform query parameters correctly with price filters', () => {
    const queryParams = {
      priceFrom: 300,
      priceTo: 500
    };
    const transformedParams = pipe.transform(queryParams, null);

    expect(transformedParams.query).toEqual({
      price: { $gte: 300, $lte: 500 }
    });
    expect(transformedParams.sort).toEqual({});
  });

  it('should transform query parameters correctly with isPromotion filter', () => {
    const queryParams = {
      isPromotion: 1
    };
    const transformedParams = pipe.transform(queryParams, null);

    expect(transformedParams.query).toEqual({
      isPromotion: 1
    });
    expect(transformedParams.sort).toEqual({});
  });

  it('should transform query parameters correctly with orderBy and orderDirection', () => {
    const queryParams = {
      orderBy: 'price',
      orderDirection: 'desc'
    };
    const transformedParams = pipe.transform(queryParams, null);

    expect(transformedParams.query).toEqual({});
    expect(transformedParams.sort).toEqual({
      price: -1
    });
  });

  it('should transform query parameters correctly when priceFrom or priceTo are undefined', () => {
    const queryParams = {
      priceFrom: undefined,
      priceTo: 500
    };
    const transformedParams = pipe.transform(queryParams, null);

    expect(transformedParams.query).toEqual({
      price: { $lte: 500 }
    });
    expect(transformedParams.sort).toEqual({});
  });

  it('should transform query parameters to empty object when no parameters are provided', () => {
    const queryParams = {};
    const transformedParams = pipe.transform(queryParams, null);

    expect(transformedParams.query).toEqual({});
    expect(transformedParams.sort).toEqual({});
  });

  it('should transform query parameters correctly with multiple filters', () => {
    const queryParams = {
      name: 'Premium',
      type: 'burger',
      priceFrom: 300,
      priceTo: 500,
      isPromotion: 1,
      orderBy: 'price',
      orderDirection: 'desc'
    };
    const transformedParams = pipe.transform(queryParams, null);

    expect(transformedParams.query).toEqual({
      name: { $regex: 'Premium', $options: 'i' },
      type: 'burger',
      price: { $gte: 300, $lte: 500 },
      isPromotion: 1
    });
    expect(transformedParams.sort).toEqual({
      price: -1
    });
  });
});
