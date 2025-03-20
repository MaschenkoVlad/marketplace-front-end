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
      publicPath: "/",
    },
    mode: mode,
    module: {
      rules: buildLoaders(isDev),
    },
    plugins: buildPlugins(isDev, paths),
    devServer: isDev ? buildDevServer(port) : undefined,
    resolve: buildResolvers(paths),
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
  };
}
