import { Configuration } from "webpack";

import { IBuildPath } from "./types";

export function buildResolvers(paths: IBuildPath): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@pages": paths.pagesPath,
    },
    modules: [".", "node_modules"],
  };
}
