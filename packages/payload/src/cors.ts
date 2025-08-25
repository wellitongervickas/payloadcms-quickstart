import { Config } from "payload";

export const cors = (): Config["cors"] => {
  return "*";
};

export default cors;
