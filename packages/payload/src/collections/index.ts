import { Config } from "payload";
import { users } from "@repo/payload/collections/users";
import { media } from "@repo/payload/collections/media";

export const collections = (): Config["collections"] => {
  return [users, media];
};

export default collections;
