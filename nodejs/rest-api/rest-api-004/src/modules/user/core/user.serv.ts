// Util
import { createToken } from '@/util/jwt/tokenUtil'
import { AppError } from '@/util/exceptions/http.exception'
import { isValidPassword } from '@/util/auth/authUtil'
// Resource
import User from '@/modules/user/spi/repo/user.repo.interface'
import UserModel from '@/modules/user/spi/repo/user.repo.model'

export default class UserService {
    private userModel = UserModel

    public async create(
        email: string,
        password: string,
        username: string,
        roles: string[]
    ): Promise<string> {
        const user = await this.userModel.create({
            email,
            password,
            username,
            roles,
        })
        user.password = ''
        return createToken(user, process.env.JWT_EXPIRES_IN)
    }

    public async login(
        email: string,
        password: string
    ): Promise<string | Error> {
        const user = (await this.findUserByEmail(email)) as User

        if (await isValidPassword(password, user.password)) {
            return createToken(user, process.env.JWT_EXPIRES_IN)
        }
        throw new AppError('Wrong credentials')
    }

    public async findUserByEmail(email: string): Promise<User | Error> {
        const user = await this.userModel.findOne({ email }).exec()
        if (user) return user

        throw new AppError('User not found by email')
    }

    public async findAll(): Promise<User[] | Error> {
        try {
            const users = await this.userModel
                .find({})
                .select('-password')
                .exec()
            return users
        } catch (error) {
            throw new AppError(error)
        }
    }
}
