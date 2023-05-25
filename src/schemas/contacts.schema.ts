import * as z from 'zod'
import { userSchemaResponse } from './users.schema'

const contactSchema = z.object({
    id: z.string(),
    contactName: z.string().min(3, 'O nome deve ter no minimo 3 caracteres.').max(120, 'O nome deve ter no máximo 120 caracteres.'),
    contactEmail: z.string().email('O email deve ser um formato válido.'),
    contactCellphone: z.string().min(10).max(12,'O numero deve ter no máximo 12 caracteres.'),
    createAt: z.string()
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    createAt: true
})

const multiContactsSchemaResponse = contactSchema.array()

const updateContactSchema = contactSchemaRequest.partial()

const contactWhitUser = contactSchema.extend({
    user: userSchemaResponse
})

export { contactSchema, contactSchemaRequest, multiContactsSchemaResponse, updateContactSchema, contactWhitUser }