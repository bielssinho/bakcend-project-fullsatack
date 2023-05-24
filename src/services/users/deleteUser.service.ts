import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entitie'


const deleteUserService = async (userId: string): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    await userRepository.delete(user!)

}

export { deleteUserService } 