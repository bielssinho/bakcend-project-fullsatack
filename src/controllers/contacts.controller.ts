import { Request, Response } from 'express'
import { TContactRequest, TContactUpdate } from '../interfaces/contact.interfaces'
import { createContactsService } from '../services/contacts/createContact.service'
import { readContactService } from '../services/contacts/readContacts.service'
import { updateContactService } from '../services/contacts/updateContact.service'
import { deleteContactService } from '../services/contacts/deleteContact.service'

const createContactController = async (req: Request, resp: Response): Promise<Response> => {
    const data: TContactRequest = req.body
    const newContact = await createContactsService(data)

    return resp.status(201).json(newContact)
}

const readContactsController =async (req: Request, resp: Response): Promise<Response> => {
    
    const listContacts = await readContactService()

    return resp.status(200).json(listContacts)
}

const updateContactController =async (req: Request, resp: Response): Promise<Response> => {
    const updateUserData: TContactUpdate = req.body
    const idUser: string = req.params.id

    const updateUser = await updateContactService(updateUserData, idUser)

    return resp.status(200).json(updateUser)
}

const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    
    const userId: string = req.params.id

    await deleteContactService(userId)

    return res.status(204).send()
}

export { createContactController, readContactsController, updateContactController, deleteContactController }