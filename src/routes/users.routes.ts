import { Router } from 'express'
import { createUserController, deleteUserController, readUserController, retrieveUserController, updateUserController } from '../controllers/users.controller'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { updateUserSchema, userSchemaRequest } from '../schemas/users.schema'
import { ensureauthMiddleware } from '../middlewares/ensureAuth.middleware'
import { ensureUserExistsMiddleware } from '../middlewares/ensureUserExists.middleware'
import { ensureOwnerUserMiddleware } from '../middlewares/ensureOwnerUser.middleware'

const usersRoutes = Router()

usersRoutes.post('', ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
usersRoutes.get('', readUserController)
usersRoutes.get('/:id', ensureauthMiddleware, ensureUserExistsMiddleware, ensureOwnerUserMiddleware, retrieveUserController)
usersRoutes.patch('/:id', ensureauthMiddleware, ensureUserExistsMiddleware, ensureOwnerUserMiddleware, ensureDataIsValidMiddleware(updateUserSchema), updateUserController)
usersRoutes.delete('/:id', ensureauthMiddleware, ensureUserExistsMiddleware, ensureOwnerUserMiddleware, deleteUserController)

export { usersRoutes }