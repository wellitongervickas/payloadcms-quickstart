import { Config } from "payload";

export const graphQL = (): Config["graphQL"] => {
  return {
    disable: true,
  };
};

export default graphQL;
