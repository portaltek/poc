db.createUser({
    user: 'my_db_username',
    pwd: 'my_db_password',
    roles: [
        {
            role: 'readWrite',
            db: 'my_db',
        },
    ],
})

db = new Mongo().getDB('my_db')
db.createCollection('users', { capped: false })
db.users.insertMany([
    {
        email: 'admin@test.com',
        password:
            'HASHED_PASSWORD',
        username: 'admin',
        roles: ['ADMIN'],
    },
    {
        email: 'user@test.com',
        password:
            'HASHED_PASSWORD',
        username: 'user',
        roles: ['USER'],
    },
])
