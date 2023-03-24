
import { RepositoryImpl } from '@sherpa/products/persistence'
import { ProductRegistrationServiceImpl, ProductsServiceImpl } from '@sherpa/products/application'
import { Global, Module } from "@nestjs/common";
import { ConfigServiceImpl } from '@sherpa/products/config'

@Global()
@Module({
    providers: [
        {
            provide: 'Repository',
            useClass: RepositoryImpl
        },
        {
            provide: 'ProductsService',
            useClass: ProductsServiceImpl
        },
        {
            provide: 'ProductRegistrationService',
            useClass: ProductRegistrationServiceImpl
        },
        {
            provide: 'ConfigService', 
            useClass: ConfigServiceImpl
        }
    ],
    exports: [
        'Repository',
        'ProductsService',
        'ProductRegistrationService',
        'ConfigService'
    ]
})
export class ContainerModule {
    
}
