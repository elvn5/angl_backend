// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

export default {
  port: 'PORT',
  postgresConfig: {
    host: 'POSTGRES_HOST',
    port: 'POSTGRES_PORT',
    username: 'POSTGRES_USER',
    password: 'POSTGRES_PASSWORD',
    database: 'POSTGRES_DB',
  },
  smtp: {
    host: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASS,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
  },
};

