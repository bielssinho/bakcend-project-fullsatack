import { Router } from 'express'
import { createUserController, deleteUserController, readUserController, updateUserController } from '../controllers/users.controller'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { updateUserSchema, userSchemaRequest } from '../schemas/users.schema'

const usersRoutes = Router()

usersRoutes.post('', ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
usersRoutes.get('', readUserController)
usersRoutes.patch('/:id', ensureDataIsValidMiddleware(updateUserSchema), updateUserController)
usersRoutes.delete('/:id', deleteUserController)

export { usersRoutes }