import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

// Util
import { verifyToken } from '@/util/jwt/tokenUtil'
import Token from '@/util/interfaces/token.interface'
import HttpException from '@/util/exceptions/http.exception'
// Resource
import UserModel from '@/modules/user/spi/repo/user.repo.model'

export default async function authService(
    req: Request,
    _res: Response,
    next: NextFunction
): Promise<Response | void> {
    try {
        const accessToken = getAccessToken(req) as string
        const jwtDecoded: Token | jwt.JsonWebTokenError = await verifyToken(
            accessToken
        )

        if (jwtDecoded instanceof jwt.JsonWebTokenError) {
            return next(new HttpException(401, 'Unauthorized'))
        }

        const user = await UserModel.findById(jwtDecoded.payload)
            .select('-password')
            .exec()

        if (!user) {
            return next(new HttpException(401, 'Unauthorized'))
        }

        req.body.user = user

        return next()
    } catch (error) {
        return next(new HttpException(401, 'Unauthorized'))
    }
}

export function getAccessToken(req: Request): string | HttpException {
    const bearer = req.headers.authorization

    if (!bearer || !bearer.startsWith('Bearer '))
        throw new HttpException(401, 'Unauthorized')

    const accessToken = bearer.split('Bearer ')[1].trim()
    return accessToken
}
