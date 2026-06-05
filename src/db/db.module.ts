import { Global, Module } from '@nestjs/common';
import { createPool } from 'mysql2';
import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';

import { ConfigType } from '@nestjs/config';
import dbConfig from '@/lib/configs/db.config';
import { relations } from './schema/relations';

export const DB = 'database';
export type Database = MySql2Database<typeof relations>;

@Global()
@Module({
  providers: [
    {
      provide: DB,
      useFactory: (dbConfiguration: ConfigType<typeof dbConfig>) => {
        const pool = createPool({
          host: dbConfiguration.host,
          user: dbConfiguration.user,
          port: Number(dbConfiguration.port),
          password: dbConfiguration.password,
          database: dbConfiguration.name,
        });
        return drizzle({ client: pool, relations, logger: true });
      },
      inject: [dbConfig.KEY],
    },
  ],
  exports: [DB],
})
export class DatabaseModule {}
