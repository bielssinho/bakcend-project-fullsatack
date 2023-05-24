import { Router } from 'express'
import { contactSchemaRequest, updateContactSchema } from '../schemas/contacts.schema'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { createContactController, deleteContactController, updateContactController } from '../controllers/contacts.controller'
import { readContactsController } from '../controllers/contacts.controller'
import { ensureauthMiddleware } from '../middlewares/ensureAuth.middleware'
import { ensureIsOwnerMiddleware } from '../middlewares/ensureIsOwner.middleware'

const contactRoutes = Router()

contactRoutes.use(ensureauthMiddleware)

contactRoutes.post('', ensureDataIsValidMiddleware(contactSchemaRequest), createContactController)
contactRoutes.get('', readContactsController)
contactRoutes.patch('/:id', ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(updateContactSchema), updateContactController)
contactRoutes.delete('/:id', ensureIsOwnerMiddleware, deleteContactController)

export { contactRoutes }