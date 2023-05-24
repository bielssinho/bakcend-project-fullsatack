import { hash } from 'bcryptjs'
import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entitie'
import { AppError } from '../../errors/AppError'
import { TUserRequest, TUserResponse } from '../../interfaces/users.interfaces'
import { Repository } from 'typeorm'
import { userSchemaResponse } from '../../schemas/users.schema'

const createUsersService = async (data: TUserRequest): Promise<TUserResponse> => {
    const { email, name, password, cellphone, profileImage} = data
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUserByEmail = await userRepository.findOne({
        where: {
            email
        }
    })
    const findUserByCellphone = await userRepository.findOne({
        where: {
            cellphone
        }
    })

    if(findUserByEmail){
        throw new AppError('Email already exists', 409)
    }

    if(findUserByCellphone){
        throw new AppError('Cellphone already exists', 409)
    }

    const hashedPassword: string = await hash(password, 10)

    const userReq = {
        name,
        email,
        password: hashedPassword,
        cellphone,
        profileImage,
    }

    const user = userRepository.create(userReq)

    await userRepository.save(user)

    return userSchemaResponse.parse(user)
}

export { createUsersService }