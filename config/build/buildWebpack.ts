import webpack from "webpack";

import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { IBuildOptions } from "./types";

export function buildWebpack(options: IBuildOptions): webpack.Configuration {
  const { port, mode = "development", paths } = options;
  const isDev = mode === "development";

  return {
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "bundle.[contenthash].js",
      clean: true,
    },
    mode: mode,
    module: {
      rules: buildLoaders(mode),
    },
    plugins: buildPlugins(mode, paths),
    devServer: isDev ? buildDevServer(port, isDev) : undefined,
    resolve: buildResolvers(),
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
  };
}
