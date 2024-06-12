import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildMode } from "./types";

export function buildLoaders(mode: BuildMode): ModuleOptions["rules"] {
  const isDev = mode === "development";

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: isDev ? "automatic" : "classic",
            },
          ],
        ],
      },
    },
  };

  return [imageLoader, cssLoader, babelLoader, svgLoader];
}
