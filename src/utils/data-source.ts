// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from "config"

interface IPostgresConfig  {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}

const postgresConfig = config.get<IPostgresConfig>('postgresConfig');

export const AppDataSource = new DataSource({
    ...postgresConfig,
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: [ 'src/entities/**/*.entity{.ts,.js}' ],
    migrations: [ 'src/migrations/**/*{.ts,.js}' ],
    subscribers: [ 'src/subscribers/**/*{.ts,.js}' ],
});

