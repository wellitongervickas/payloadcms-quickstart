import { Config } from "payload";

export type TypescriptOptions = {
  outputFile: string;
};

export const typescript = (
  options: TypescriptOptions,
): Config["typescript"] => {
  return {
    outputFile: options.outputFile,
  };
};

export default typescript;
