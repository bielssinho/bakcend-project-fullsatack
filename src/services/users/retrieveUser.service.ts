import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TUserResponse, TUserResponseWhitContacts } from '../../interfaces/users.interfaces'
import User from '../../entities/user.entitie'
import { userSchemaResponse, userSchemaResponseWhitContacts } from '../../schemas/users.schema'

const retrieveUserService = async (idUser: string): Promise<TUserResponseWhitContacts> => {
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const listUsers: User | null = await usersRepository.findOne({
        where: {
            id: idUser
        },
        relations: {
            contacts: true
        }
    })
    
    const listsUsersFounded = userSchemaResponseWhitContacts.parse(listUsers)

    return listsUsersFounded
}

export { retrieveUserService }