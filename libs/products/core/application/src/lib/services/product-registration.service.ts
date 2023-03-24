import { Injectable } from "@nestjs/common";
import { IProductRegistrationService } from "../interfaces/product-registration.interface";
import { Product } from '@sherpa/products/domain'

@Injectable()
export class ProductRegistrationService implements IProductRegistrationService {
    registerProduct(product: Product) {
        
    }
}