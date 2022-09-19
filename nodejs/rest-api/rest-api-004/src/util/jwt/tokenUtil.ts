import jwt from 'jsonwebtoken'
import Token from '@/util/interfaces/token.interface'

export const createToken = (payload: any, expiresIn: string = '1s'): string => {
    return jwt.sign(
        { payload: payload },
        process.env.JWT_SECRET as jwt.Secret,
        {
            expiresIn: expiresIn,
        }
    )
}

export const verifyToken = async (
    token: string
): Promise<jwt.VerifyErrors | Token> => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            process.env.JWT_SECRET as jwt.Secret,
            (err, payload) => {
                if (err) return reject(err)
                resolve(payload as Token)
            }
        )
    })
}

export default { createToken, verifyToken }
