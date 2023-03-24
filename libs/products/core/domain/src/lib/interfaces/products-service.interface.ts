import { Product } from "../models/product";

export interface ProductsService {
    addProduct(title: string, description: string): Promise<Product>
    getAll(): Promise<Product[]>
}