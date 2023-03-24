import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsModule } from '@sherpa/products/delivery'
import { ContainerModule } from '@sherpa/products/ioc'
@Module({
  imports: [ProductsModule, ContainerModule ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {


}
