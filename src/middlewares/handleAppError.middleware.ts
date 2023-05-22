import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors/AppError'
import { ZodError } from 'zod'

const handleAppErrorMiddleware = (error: Error, req: Request, resp: Response, _: NextFunction) => {
    if(error instanceof AppError){
        return resp.status(error.statusCode).json({
            message: error.message
        })
    }

    if(error instanceof ZodError){
        return resp.status(400).json({
            message: error.flatten().fieldErrors
        })
    }

    return resp.status(500).json({
        message: error.message
    })
}

export {
    handleAppErrorMiddleware
}