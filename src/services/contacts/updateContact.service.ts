import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contact.entitie'
import { TContact, TContactUpdate } from '../../interfaces/contact.interfaces'
import { AppError } from '../../errors/AppError'

const updateContactService = async (updateContactData: TContactUpdate, idContact: string): Promise<TContact> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findOldContactData = await contactRepository.findOne({
        where: {
            id: idContact
        }
    })

    if(!findOldContactData){
        throw new AppError('Contact not found', 404)
    }
  
    const contact = contactRepository.create({
        ...findOldContactData,
        ...updateContactData
    })

    await contactRepository.save(contact)

    return contact
}

export { updateContactService }