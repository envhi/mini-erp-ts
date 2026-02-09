export function makeUserService(userRepository: any) {
    return {
        async createUser(userData: any) {
            const user = await userRepository.createUser(userData)

            return user
        }}
        
}