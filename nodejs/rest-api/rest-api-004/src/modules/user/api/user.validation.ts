import Joi from 'joi'

const create = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().max(30).required(),
    password: Joi.string().min(6).required(),
    roles: Joi.array().items(Joi.string()),
})

const login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

export default { create, login }
