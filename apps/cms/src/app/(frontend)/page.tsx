import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'

import config from '@/payload.config'

import { DefaultLayout } from '@repo/ui/components/shared/layout'

import { Button } from '@repo/ui/components/button'

import { Card, CardDescription, CardHeader, CardTitle } from '@repo/ui/components/card'

import { Sparkles } from '@repo/ui/components/icon'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <DefaultLayout>
      <Card>
        <CardHeader>
          <CardTitle>
            <Sparkles className="w-6 h-6 text-white" />
            <h1>Welcome</h1>
          </CardTitle>
        </CardHeader>

        <CardDescription>
          Quick start using PayloadCMS and Shadcn. This can be a quick start for a monolithic
          project.
        </CardDescription>
        <CardDescription>
          {!user && <h1>Welcome to your new project.</h1>}
          {user && <h1>Welcome back, {user.email}</h1>}
        </CardDescription>
        <Button variant="outline">Like!</Button>
      </Card>
    </DefaultLayout>
  )
}
