import { Schema, model } from 'mongoose'
import { encryptPassword } from '@/util/auth/authUtil'
import User from '@/modules/user/spi/repo/user.repo.interface'

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
        },
        username: {
            type: String,
            required: true,
        },
        roles: {
            type: [
                {
                    type: String,
                },
            ],
            required: true,
        },
    },
    { timestamps: true }
)

UserSchema.pre<User>('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }

    this.password = await encryptPassword(this.password)

    next()
})

export default model<User>('User', UserSchema)
