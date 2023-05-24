import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contact.entitie'
import { AppError } from '../../errors/AppError'
import { Repository } from 'typeorm'
import { TContact, TContactRequest } from '../../interfaces/contact.interfaces'
import { contactSchema } from '../../schemas/contacts.schema'

const createContactsService = async (data: TContactRequest): Promise<TContact> => {
    const { contactName, contactEmail, contactCellphone } = data
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const findContactByEmail = await contactRepository.findOne({
        where: {
            contactEmail
        }
    })
    const findContactByCellphone = await contactRepository.findOne({
        where: {
            contactCellphone
        }
    })

    if(findContactByEmail){
        throw new AppError('Email already exists', 409)
    }

    if(findContactByCellphone){
        throw new AppError('Cellphone already exists', 409)
    }

    const user = contactRepository.create({
        contactName,
        contactEmail,
        contactCellphone
    })

    await contactRepository.save(user)

    return contactSchema.parse(user)
}

export { createContactsService }