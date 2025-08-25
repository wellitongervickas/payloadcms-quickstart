import { Plugin } from "payload";

import { payloadCloudPlugin } from "@payloadcms/payload-cloud";

export const plugins = (): Plugin[] => {
  return [payloadCloudPlugin()];
};

export default plugins;
