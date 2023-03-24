import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsModule } from '@sherpa/products/api'
@Module({
  imports: [ProductsModule ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {


}
