import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import Contact from "../entities/contact.entitie"
import { AppError } from "../errors/AppError"


const ensureIsOwnerMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
    const contactRepositoy = AppDataSource.getRepository(Contact)

    const contactId: string = req.params.id
    const authenticadeId: string = resp.locals.userId

    const findContact: Contact | null = await contactRepositoy.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    if(!findContact){
        throw new AppError('Contact not found', 404)
    }

    if(authenticadeId !== findContact.user.id){
        throw new AppError('You don`t have permissions', 403)
    }

    return next()

}

export { ensureIsOwnerMiddleware }