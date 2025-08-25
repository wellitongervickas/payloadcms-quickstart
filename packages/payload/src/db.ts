import { Config } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";

export type DBConfig = {
  pool: {
    connectionString: string;
  };
};

export const db = (options: DBConfig): Config["db"] => {
  return postgresAdapter({
    pool: {
      connectionString: options.pool.connectionString,
    },
  });
};

export default db;
