import { Config } from "payload";
import _sharp from "sharp";

export const sharp = (): Config["sharp"] => {
  return _sharp;
};

export default sharp;
