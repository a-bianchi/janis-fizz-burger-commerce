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
import { ProductTypeEnum, StatusEnum } from '../schemas/product.schema';

export class ProductUpdateDto {
  @IsOptional()
  @IsString()
    name;

  @IsOptional()
  @IsString()
  @IsIn(ProductTypeEnum, { message: 'Invalid type' })
    type;

  @IsOptional()
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

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @ArrayMinSize(1, { message: 'Ingredients cannot be empty' })
  @IsString({ each: true })
    ingredients;

  @IsOptional()
  @IsString()
  @IsIn(StatusEnum, { message: 'Invalid status' })
    status;
}
