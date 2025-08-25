import { Config } from "payload";

export type SecretOptions = {
  secret: string;
};

export const secret = (options: SecretOptions): Config["secret"] => {
  if (!options.secret) {
    throw new Error("variable PAYLOAD_SECRET is not set");
  }

  return options.secret;
};

export default secret;
