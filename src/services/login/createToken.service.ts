import { compare } from 'bcryptjs'
import { TLoginRequest } from '../../interfaces/login.interfaces'
import { AppError } from '../../errors/AppError'
import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entitie'
import jwt from 'jsonwebtoken'

interface loginReturnProp {
    token: string;
    userId: string;
}


const createTokenService = async ({ email, password }: TLoginRequest): Promise<loginReturnProp> => {
    const usersRepository = AppDataSource.getRepository(User)

    const user = await usersRepository.findOne({
        where: {
            email
        }
    })

    if (!user) {
        throw new AppError("Invalid credentials", 403)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 403)
    }

    const token = jwt.sign(
        { userName: user.name },
        process.env.SECRET_KEY!,
        {
            expiresIn: "1h",
            subject: user.id
        }
    )

    const loginReturn = {
        token: token,
        userId: user.id
    }

    return loginReturn
}

export { createTokenService }