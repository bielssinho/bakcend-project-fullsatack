import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contact.entitie'


const deleteContactService = async (userId: string): Promise<void> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOne({
        where: {
            id: userId
        }
    })

    await contactRepository.delete(contact!)

}

export { deleteContactService } 