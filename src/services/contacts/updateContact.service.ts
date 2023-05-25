import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contact.entitie'
import { TContactUpdate, TContact } from '../../interfaces/contact.interfaces'
import { contactWhitUser } from '../../schemas/contacts.schema'

const updateContactService = async (updateContactData: TContactUpdate, idContact: string): Promise<TContact> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const oldContactData = await contactRepository.findOne({
        where: {
            id: idContact
        },
        relations: {
            user: true
        }
    })

    const contact = contactRepository.create({
        ...oldContactData,
        ...updateContactData
    })

    await contactRepository.save(contact)

    const updateContact = contactWhitUser.parse(contact)

    return updateContact
}

export { updateContactService }