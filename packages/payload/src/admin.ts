import { Config } from "payload";

import { users } from "@repo/payload/collections/users";

export type AdminOptions = {
  importMap: {
    baseDir: string;
  };
};

export const admin = (options: AdminOptions): Config["admin"] => {
  return {
    user: users.slug,
    importMap: {
      /// current directory
      baseDir: options.importMap.baseDir,
    },
  };
};

export default admin;
