module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://db_access:freedom@localhost/dad-blog',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
}


// 'postgres://localhost/dad-blog'

// {
//   host: '127.0.0.1',
//   user: 'db_access',
//   password: 'freedom',
//   database: 'dad-blog',
// }