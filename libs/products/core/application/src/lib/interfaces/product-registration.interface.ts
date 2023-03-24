import { Product } from "@sherpa/products/domain";

export interface ProductRegistrationService {
    retrieveProducts(): Promise<Product[]>
    registerProduct(product: Product): Promise<Product>
}