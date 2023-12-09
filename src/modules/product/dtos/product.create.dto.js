import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
  IsIn,
  ValidateIf,
  IsUrl,
  IsPositive,
  ArrayMinSize,
  Min,
  Max
} from 'class-validator';
import { ProductTypeEnum } from '../schemas/product.schema';

export class ProductCreateDto {
  @IsString()
    name;

  @IsString()
  @IsIn(ProductTypeEnum, { message: 'Invalid type' })
    type;

  @IsNumber()
  @IsPositive()
    price;

  @IsOptional()
  @IsUrl()
    image;

  @IsOptional()
  @IsBoolean()
    isPromotion;

  @ValidateIf(o => o.isPromotion === true)
  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'Discount must be greater than 0' })
  @Max(100, { message: 'Discount cannot be greater than 100' })
    discount;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @ArrayMinSize(1, { message: 'Ingredients cannot be empty' })
  @IsString({ each: true })
    ingredients;
}
