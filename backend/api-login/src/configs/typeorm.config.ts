import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'db-login',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  "migrations": ["dist/migrations/*{.ts,.js}"],
  "migrationsTableName": "migrations_history",
  "migrationsRun": true,
}