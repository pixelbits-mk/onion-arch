import { Injectable } from '@nestjs/common';
import { Repository } from '@sherpa/products/domain'
@Injectable()
export class RepositoryImpl implements Repository {
    async create<T>(item: T): Promise<T> {
        console.log('create')
        return null
    }
    async update<T>(item: T): Promise<T> {
        console.log('update')
        return null
    }
    async delete(itemId: string): Promise<void> {
        console.log('delete')
    }
    async getAll<T>(): Promise<T[]> {
        console.log('get all')
        return []
    }

}