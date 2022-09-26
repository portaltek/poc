import 'dotenv/config'
import { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken'
import { createToken, verifyToken } from '@/util/jwt/tokenUtil'
import Token from '@/util/interfaces/token.interface'

const user = {
    id: 'user.id',
    username: 'user.username',
    roles: ['ADMIN', 'USER'],
}
const validJwt = createToken(user)
const invalidJwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6InVzZXIuaWQiLCJ1c2VybmFtZSI6InVzZXIudXNlcm5hbWUiLCJyb2xlcyI6WyJST0xFXzEiLCJST0xFXzIiXX0sImlhdCI6MTY2NDA1ODU3MywiZXhwIjoxNjY0MDU4NTc0fQ.KdYoAME7Bth-9V-8y65WeSd7rjINYgg2Wvv2OLNwMwd'

describe('given a user ', () => {
    describe('when createToken() ', () => {
        it('then should create token', () => {
            const headerLength = validJwt.split('.')[0].length
            expect(headerLength).toBe(36)
        })
    })
    describe('when verifyToken() ', () => {
        it('then should verify token', async () => {
            const jwtDecoded = (await verifyToken(validJwt)) as Token
            expect(jwtDecoded.payload).toEqual(user)
        })
    })
    describe('when verifyToken() of invalid token', () => {
        it('then should throw error', async () => {
            try {
                await verifyToken(invalidJwt)
            } catch (error) {
                expect(error).toBeInstanceOf(JsonWebTokenError)
            }
        })
    })
    describe('when verifyToken() after expiration (1s)', () => {
        it('then should throw error', async () => {
            await new Promise((r) => setTimeout(r, 1001))
            try {
                await verifyToken(validJwt)
            } catch (error) {
                expect(error).toBeInstanceOf(TokenExpiredError)
            }
        })
    })
})
