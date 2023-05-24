import { z } from 'zod'
import { contactSchema, contactSchemaRequest } from '../schemas/contacts.schema'
import { DeepPartial } from 'typeorm'

type TContact = z.infer<typeof contactSchema>

type TContactRequest = z.infer<typeof contactSchemaRequest>

type TContactUpdate = DeepPartial<TContact>

export { TContact, TContactRequest, TContactUpdate }