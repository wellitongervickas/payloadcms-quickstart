import { DefaultLayout } from "@repo/ui/components/shared/layout";

import { Button } from "@repo/ui/components/button";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";

import { Sparkles } from "@repo/ui/components/icon";

const HomePage = () => {
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
          Quick start using PayloadCMS and Shadcn. This can be a quick start for
          a multizone project.
        </CardDescription>
        <Button variant="outline">Like!</Button>
      </Card>
    </DefaultLayout>
  );
};

export default HomePage;
