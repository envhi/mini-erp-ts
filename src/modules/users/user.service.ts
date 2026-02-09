import { UserRepository } from "./interfaces/user.repository.interface"

export function makeUserService(userRepository: UserRepository) {
    return {
        async createUser(userData: any) {
            const user = await userRepository.createUser(userData)

            return user
        }}
        
}