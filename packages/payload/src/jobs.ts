import { JobsConfig, PayloadRequest } from "payload";

export type JobsOptions = {
  secret: string;
};

export const jobs = (options: JobsOptions): JobsConfig => {
  return {
    tasks: [],
    workflows: [],
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        const authHeader = req.headers.get("authorization");

        /// @dev: in order to validate who is calling the cron, must verify the authorization header
        /// it will provide a way to run jobs thats in the queue
        if (authHeader !== `Bearer ${options.secret}`) {
          req.payload.logger.error("jobs: Invalid credentials");
          return false;
        }

        req.payload.logger.info("jobs: running cron");

        return true;
      },
    },
  };
};
