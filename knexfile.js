const path = require('path');

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host : process.env.HOST_BASE,
      port : process.env.PORT_BASE,
      user : process.env.USER_BASE,
      password : process.env.PASSWORD_BASE,
      database : process.env.DATA_BASE
    },
   /* pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },*/
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault:true
  },
};
