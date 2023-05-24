import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors/AppError'


const ensureOwnerUserMiddleware = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {

    const authenticateId: string = resp.locals.userId
    const paramsId: string = req.params.id

    if(paramsId!==authenticateId){
        throw new AppError('You don`t have permissions', 403)
    }

    return next()

}

export { ensureOwnerUserMiddleware }