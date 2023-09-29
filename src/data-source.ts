import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
