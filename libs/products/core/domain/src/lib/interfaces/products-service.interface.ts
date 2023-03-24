import { Product } from "../models/product";

export interface IProductsService {
    addProduct(title: string, description: string): Promise<Product>
    getAll(): Promise<Product[]>
}