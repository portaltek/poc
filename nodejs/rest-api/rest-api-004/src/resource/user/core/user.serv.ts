// Util
import { createToken } from '@/util/jwt/tokenUtil'
import { getMessage } from '@/util/exceptions/http.exception'
import { isValidPassword } from '@/util/auth/authUtil'
// Resource
import User from '@/resource/user/spi/repo/user.repo.interface'
import UserModel from '@/resource/user/spi/repo/user.repo.model'

class UserService {
    private userModel = UserModel

    public async register(
        name: string,
        email: string,
        password: string,
        role: string
    ): Promise<string | Error> {
        try {
            const user = await this.userModel.create({
                name,
                email,
                password,
                role,
            })
            user.password = ''
            return createToken(user, process.env.JWT_EXPIRES_IN)
        } catch (error) {
            throw new Error(getMessage(error))
        }
    }

    public async login(
        email: string,
        password: string
    ): Promise<string | Error> {
        try {
            const user = await this.userModel.findOne({ email }).exec()

            if (!user) {
                throw new Error('Unable to find user with that email address')
            }

            if (await isValidPassword(password, user.password)) {
                return createToken(user, process.env.JWT_EXPIRES_IN)
            } else {
                throw new Error('Wrong credentials given')
            }
        } catch (error) {
            throw new Error('Unable to create user')
        }
    }

    public async findAll(): Promise<User[] | Error> {
        try {
            const users = await this.userModel
                .find({})
                .select('-password')
                .exec()
            return users
        } catch (error) {
            throw new Error(getMessage(error))
        }
    }
}

export default UserService
