import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import { ProductsService, Repository, Product } from "@sherpa/products/domain";

@Injectable()
export class ProductsServiceImpl implements ProductsService {
    constructor(@Inject('Repository') private repository: Repository) {

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