import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TUserResponse, TUserUpdate } from '../../interfaces/users.interfaces'
import User from '../../entities/user.entitie'
import { userSchemaResponse } from '../../schemas/users.schema'

const updateUserService = async (updateUserData: TUserUpdate, idUser: string): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({
        id: idUser
    })

    const user = userRepository.create({
        ...oldUserData,
        ...updateUserData
    })

    await userRepository.save(user)

    const updateUser = userSchemaResponse.parse(user)

    return updateUser
}

export { updateUserService }