import { buildConfig } from "payload";
import { admin } from "@repo/payload/admin";
import { db } from "@repo/payload/db";
import { editor } from "@repo/payload/editor";
import { email } from "@repo/payload/email";
import { graphQL } from "@repo/payload/graphQL";
import { i18n } from "@repo/payload/i18n";
import { jobs } from "@repo/payload/jobs";
import { localization } from "@repo/payload/localization";
import { secret } from "@repo/payload/secret";
import { typescript } from "@repo/payload/typescript";
import { cors } from "@repo/payload/cors";
import { csrf } from "@repo/payload/csrf";
import { sharp } from "@repo/payload/sharp";
import { plugins } from "@repo/payload/plugins";
import { collections } from "@repo/payload/collections";
import { Locale } from "@repo/payload/locales";
import { fileURLToPath } from "url";
import path from "path";

export type PayloadConfigOptions = {
  importMapBaseDir: string;
  cronSecret: string;
  payloadSecret: string;
  databaseURI: string;
  typescriptOutputFile?: string;
};

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const getPayloadConfig = async ({
  importMapBaseDir,
  cronSecret,
  payloadSecret,
  databaseURI,
  typescriptOutputFile,
}: PayloadConfigOptions) =>
  buildConfig({
    admin: admin({
      importMap: {
        baseDir: importMapBaseDir,
      },
    }),
    plugins: plugins(),
    i18n: i18n({
      fallbackLanguage: Locale.EN,
      supportedLanguages: [Locale.EN],
    }),
    localization: localization({
      locales: [Locale.EN],
      defaultLocale: Locale.EN,
    }),
    editor: editor(),
    jobs: jobs({
      secret: cronSecret,
    }),
    email: email(),
    cors: cors(),
    csrf: csrf(),
    graphQL: graphQL(),
    collections: collections(),
    secret: secret({
      secret: payloadSecret,
    }),
    typescript: typescript({
      outputFile:
        typescriptOutputFile || path.resolve(dirname, "payload-types.ts"),
    }),
    db: db({
      pool: {
        connectionString: databaseURI,
      },
    }),
    sharp: sharp(),
  });

export default getPayloadConfig;
