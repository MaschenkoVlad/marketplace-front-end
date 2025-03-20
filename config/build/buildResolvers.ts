import { Configuration } from "webpack";

import { IBuildPath } from "./types";

export function buildResolvers(paths: IBuildPath): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@pages": paths.pagesPath,
    },
    preferAbsolute: true,
    mainFiles: ["index"],
    // TODO:
    modules: [".", "node_modules"],
  };
}
