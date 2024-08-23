import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiForbiddenResponse, ApiTags } from "@nestjs/swagger";

import {
  CreateListProductsDto,
  CreateProductDto,
} from './dto/req/create-products.dto';
import { UpdateProductDto } from './dto/req/update-products.dto';
import { ProductResDto, ProductsListResDto } from './dto/res/product.res.dto';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Post()
  public async create(
    @Body() dto: CreateListProductsDto,
  ): Promise<ProductsListResDto> {
    return await this.productsService.create(dto);
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Get()
  public async findAll(): Promise<ProductsListResDto> {
    return await this.productsService.findAll();
  }
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<ProductResDto> {
    return await this.productsService.findOne(+id);
  }

  //@Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<ProductResDto> {
    return await this.productsService.update(+id, dto);
  }

  //@Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
