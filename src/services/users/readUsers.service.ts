import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TUserResponse } from '../../interfaces/users.interfaces'
import User from '../../entities/user.entitie'
import { multiUsersSchemaResponse } from '../../schemas/users.schema'

const readUserService = async (): Promise<TUserResponse[]> => {
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const listUsers: Array<User> = await usersRepository.find()
    
    const listsUsersFounded = multiUsersSchemaResponse.parse(listUsers)

    return listsUsersFounded
}

export { readUserService }