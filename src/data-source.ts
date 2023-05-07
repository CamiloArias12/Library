import "reflect-metadata"
import { DataSource } from "typeorm"
import { entities } from "./entity/index.js"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "library",
    synchronize: true,
    logging: false,
    entities:entities, 
    migrations: [],
    subscribers: [],
})
