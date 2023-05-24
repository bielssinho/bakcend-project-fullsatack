import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contact.entitie'
import { TContact } from '../../interfaces/contact.interfaces'
import { multiContactsSchemaResponse } from '../../schemas/contacts.schema'

const readContactService = async (): Promise<TContact[]> => {
    const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const listContacts: Array<Contact> = await contactsRepository.find()
    
    const listsContactsFounded = multiContactsSchemaResponse.parse(listContacts)

    return listsContactsFounded
}

export { readContactService }