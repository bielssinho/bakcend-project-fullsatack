import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TUserResponse, TUserUpdate } from '../../interfaces/users.interfaces'
import Contact from '../../entities/contact.entitie'
import { userSchemaResponse } from '../../schemas/users.schema'
import { TContactUpdate } from '../../interfaces/contact.interfaces'

const updateContactService = async (updateUserData: TContactUpdate, idUser: string): Promise<TUserResponse> => {
    const userRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

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

export { updateContactService }