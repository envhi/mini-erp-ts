export interface UserRepository {
    createUser(data: unknown): Promise<any>
}