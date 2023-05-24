import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TUserResponse } from '../../interfaces/users.interfaces'
import User from '../../entities/user.entitie'
import { multiUsersSchemaResponse } from '../../schemas/users.schema'

const retrieveUserService = async (idUser: string): Promise<TUserResponse[]> => {
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const listUsers: Array<User> = await usersRepository.find({
        where: {
            id: idUser
        },
        relations: {
            contacts: true
        }
    })
    
    const listsUsersFounded = multiUsersSchemaResponse.parse(listUsers)

    return listsUsersFounded
}

export { retrieveUserService }