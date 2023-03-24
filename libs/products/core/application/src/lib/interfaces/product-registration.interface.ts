import { Product } from "@sherpa/products/domain";

export interface IProductRegistrationService {
    retrieveProducts(): Promise<Product[]>
    registerProduct(product: Product): Promise<Product>
}