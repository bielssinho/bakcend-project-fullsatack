import { Router } from 'express'
import { contactSchemaRequest, updateContactSchema } from '../schemas/contacts.schema'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { createContactController, deleteContactController, updateContactController } from '../controllers/contacts.controller'
import { readContactsController } from '../controllers/contacts.controller'

const contactRoutes = Router()

contactRoutes.post('', ensureDataIsValidMiddleware(contactSchemaRequest), createContactController)
contactRoutes.get('', readContactsController)
contactRoutes.patch('/:id', ensureDataIsValidMiddleware(updateContactSchema), updateContactController)
contactRoutes.delete('/:id', deleteContactController)

export { contactRoutes }