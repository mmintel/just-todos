import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { DefinePlugin } from "webpack";
import { tamaguiOptions } from "./tamagui.options";
const { TamaguiPlugin } = require("tamagui-loader");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

export const plugins = [
  // new TamaguiPlugin(tamaguiOptions),
  new DefinePlugin({
    "process.env.TAMAGUI_TARGET": JSON.stringify("web"),
  }),
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),
];
