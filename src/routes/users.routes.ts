import { Router } from 'express'
import { createUserController } from '../controllers/users.controller'

const usersRoutes = Router()

usersRoutes.post('', createUserController)

export { usersRoutes }