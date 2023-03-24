export interface IRepository {
    create<T>(item: T): Promise<T>
    update<T>(item: T): Promise<T>
    delete(itemId: string): Promise<void>
    getAll<T>(): Promise<T[]>
}