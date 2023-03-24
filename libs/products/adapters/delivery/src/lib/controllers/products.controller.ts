import { Controller, Get, Inject } from '@nestjs/common';
import { IConfigService, IProductRegistrationService } from '@sherpa/products/application'

@Controller()
export class ProductsController {
    constructor(
        @Inject('IProductRegistrationService') private registrationService: IProductRegistrationService,
        @Inject('IConfigService') private configService: IConfigService
    ) {

    }
    @Get()
    getAll() {
        return this.registrationService.retrieveProducts()
    }
}