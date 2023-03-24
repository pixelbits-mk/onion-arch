
import { Repository } from '@sherpa/products/persistence'
import { ProductRegistrationService, ProductsService } from '@sherpa/products/application'
import { Global, Module } from "@nestjs/common";
import { ConfigService } from '@sherpa/products/config'

@Global()
@Module({
    providers: [
        {
            provide: 'IRepository',
            useClass: Repository
        },
        {
            provide: 'IProductsService',
            useClass: ProductsService
        },
        {
            provide: 'IProductRegistrationService',
            useClass: ProductRegistrationService
        },
        {
            provide: 'IConfigService', 
            useClass: ConfigService
        }
    ],
    exports: [
        'IRepository',
        'IProductsService',
        'IProductRegistrationService',
        'IConfigService'
    ]
})
export class ContainerModule {
    
}
