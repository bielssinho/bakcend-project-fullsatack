import { z } from 'zod'
import { contactSchema, contactSchemaRequest, contactWhitUserSchema } from '../schemas/contacts.schema'
import { DeepPartial } from 'typeorm'

type TContact = z.infer<typeof contactSchema>

type TContactRequest = z.infer<typeof contactSchemaRequest>

type TContactUpdate = DeepPartial<TContact>

type TContactWhitUser = z.infer<typeof contactWhitUserSchema>

export { TContact, TContactRequest, TContactUpdate, TContactWhitUser }