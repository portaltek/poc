db.createUser({
    user: 'my_db_username',
    pwd: 'my_db_password',
    roles: [
        {
            role: 'dbOwner',
            db: 'my_db',
        },
    ],
});
