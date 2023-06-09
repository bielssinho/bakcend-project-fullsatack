import { Request, Response } from 'express'
import { TUserRequest, TUserResponse, TUserUpdate } from '../interfaces/users.interfaces'
import { createUsersService } from '../services/users/createUser.service'
import { readUserService } from '../services/users/readUsers.service'
import { updateUserService } from '../services/users/updateUser.service'
import { deleteUserService } from '../services/users/deleteUser.service'
import { retrieveUserService } from '../services/users/retrieveUser.service'

const createUserController = async (req: Request, resp: Response): Promise<Response> => {
    const data: TUserRequest = req.body
    const newUser: TUserResponse = await createUsersService(data)

    return resp.status(201).json(newUser)
}

const readUserController =async (req: Request, resp: Response): Promise<Response> => {
    
    const listUsers = await readUserService()

    return resp.status(200).json(listUsers)
}

const retrieveUserController =async (req: Request, resp: Response): Promise<Response> => {
    
    const idUser: string = req.params.id
    const user = await retrieveUserService(idUser)

    return resp.status(200).json(user)
}

const updateUserController =async (req: Request, resp: Response): Promise<Response> => {
    const updateUserData: TUserUpdate = req.body
    const idUser: string = req.params.id

    const updateUser = await updateUserService(updateUserData, idUser)

    return resp.status(200).json(updateUser)
}

const deleteUserController = async (req: Request, resp: Response): Promise<Response> => {
    
    const userId: string = req.params.id

    await deleteUserService(userId)

    return resp.status(204).send()
}

export {
    createUserController,
    readUserController,
    retrieveUserController,
    updateUserController,
    deleteUserController
}