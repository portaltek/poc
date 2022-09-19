import bcrypt from 'bcrypt'

export async function isValidPassword(
    plainPassword: string,
    encryptedPassword: string
): Promise<Error | boolean> {
    return bcrypt.compare(plainPassword, encryptedPassword)
}

export async function encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
}
