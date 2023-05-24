import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"


const ensureauthMiddleware = (req: Request, resp: Response, next: NextFunction) => {
    const token = req.headers.authorization

    if (!token) {
        return resp.status(401).json({
            message: "invalid token"
        })
    }

    const splitToken = token.split(" ")[1]

    jwt.verify(splitToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            return resp.status(401).json({
                message: "invalid token"
            })
        }

        resp.locals.userId = decoded.sub

        return next()
    })
}

export { ensureauthMiddleware }