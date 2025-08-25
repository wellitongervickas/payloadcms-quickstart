import { fileURLToPath } from 'url'
import path from 'path'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

import { getPayloadConfig } from '@repo/payload'

export default getPayloadConfig({
  importMapBaseDir: path.resolve(dirname),
  typescriptOutputFile: path.resolve(dirname, 'payload-types.ts'),
  payloadSecret: process.env.PAYLOAD_SECRET!,
  cronSecret: process.env.CRON_SECRET!,
  databaseURI: process.env.DATABASE_URI!,
})
