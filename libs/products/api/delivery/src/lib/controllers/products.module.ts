import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ContainerModule } from '@sherpa/products/ioc'

@Module({
    imports: [ContainerModule],
    controllers: [ProductsController],
    providers: [],
  })
export class ProductsModule {
}