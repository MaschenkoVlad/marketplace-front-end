import { Configuration, DefinePlugin } from "webpack";
import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildMode, IBuildPath } from "./types";
import path from "path";
// import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(mode: BuildMode, paths: IBuildPath): Configuration['plugins'] {
    const isDev = mode === 'development';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'marketplace_favicon.ico') }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
        plugins.push(new ForkTsCheckerWebpackPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    } else {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
        // plugins.push(new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(paths.public, 'locales'),
        //             to: path.resolve(paths.output, 'locales'), 
        //         }
        //     ]
        // }));
    }

    return plugins;
}