import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import { IProductsService, IRepository, Product } from "@sherpa/products/domain";

@Injectable()
export class ProductsService implements IProductsService {
    constructor(@Inject('IRepository') private repository: IRepository) {

    }
    addProduct(title: string, description: string): Promise<Product> {
        return this.repository.create<Product>({
            productId: '',
            title,
            description
        })
    }
    getAll() {
        return this.repository.getAll<Product>()
    }
}