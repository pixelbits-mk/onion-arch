import { Injectable } from "@nestjs/common";
import { IProductRegistrationService } from "../interfaces/product-registration.interface";
import { Product } from '@sherpa/products/domain'

@Injectable()
export class ProductRegistrationService implements IProductRegistrationService {
    async retrieveProducts(): Promise<Product[]> {
        console.log('retrieveProducts')
        return []
    }
    async registerProduct(product: Product): Promise<Product>  {
        console.log('retrieveProducts')
        return product
    }
}