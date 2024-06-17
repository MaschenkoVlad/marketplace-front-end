import webpack from "webpack";
import path from "path";

import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, IBuildPath } from "./config/build/types";

export interface IEnvVariables {
  mode?: BuildMode;
  port?: number | undefined;
}

export default (env: IEnvVariables) => {
  const paths: IBuildPath = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    pagesPath: path.resolve(__dirname, "src/pages"),
  };

  // const aliasPaths: IAliasPaths = {};

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
  });

  return config;
};
