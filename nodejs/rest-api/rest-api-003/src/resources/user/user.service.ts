import UserModel from '@/resources/user/user.model';
import { getMessage } from '@/util/exceptions/http.exception';
import token from '@/util/token';
import User from '@/resources/user/user.interface';

class UserService {
    private user = UserModel;
    public async register(
        name: string,
        email: string,
        password: string,
        role: string
    ): Promise<string | Error> {
        try {
            const user = await this.user.create({
                name,
                email,
                password,
                role,
            });

            return token.createToken(user);
        } catch (error) {
            throw new Error(getMessage(error));
        }
    }

    public async login(
        email: string,
        password: string
    ): Promise<string | Error> {
        try {
            const user = await this.user.findOne({ email }).exec();

            if (!user) {
                throw new Error('Unable to find user with that email address');
            }

            if (await user.isValidPassword(password)) {
                return token.createToken(user);
            } else {
                throw new Error('Wrong credentials given');
            }
        } catch (error) {
            throw new Error('Unable to create user');
        }
    }

    public async findAll(): Promise<User[] | Error> {
        try {
            const users = await this.user.find({}).exec();
            return users;
        } catch (error) {
            throw new Error(getMessage(error));
        }
    }
}

export default UserService;
