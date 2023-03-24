import { Controller, Get, Inject } from '@nestjs/common';
import { IProductsService } from '@sherpa/products/domain'
import { IConfigService } from '@sherpa/products/application'

@Controller()
export class ProductsController {
    constructor(
        @Inject('IProductsService') private productsService: IProductsService,
        @Inject('IConfigService') private configService: IConfigService
    ) {

    }
    @Get()
    getAll() {
        return this.productsService.getAll()
    }
}