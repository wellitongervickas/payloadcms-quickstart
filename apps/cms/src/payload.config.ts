import { getPayloadConfig } from '@repo/payload'

import { fileURLToPath } from 'url'
import path from 'path'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default getPayloadConfig({
  importMapBaseDir: path.resolve(dirname),
  payloadSecret: process.env.PAYLOAD_SECRET!,
  cronSecret: process.env.CRON_SECRET!,
  databaseURI: process.env.DATABASE_URI!,
})
