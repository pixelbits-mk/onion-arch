import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService, ProductRegistrationService } from '@sherpa/products/application'

@Controller()
export class ProductsController {
    constructor(
        @Inject('ProductRegistrationService') private registrationService: ProductRegistrationService,
        @Inject('ConfigService') private configService: ConfigService
    ) {

    }
    @Get()
    getAll() {
       return this.registrationService.retrieveProducts()
    }
}