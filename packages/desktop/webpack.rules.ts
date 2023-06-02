import type { ModuleOptions } from "webpack";
import { tamaguiOptions } from "./tamagui.options";

export const rules: Required<ModuleOptions>["rules"] = [
  {
    test: /native_modules[/\\].+\.node$/,
    use: "node-loader",
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@vercel/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: [
      "thread-loader",
      {
        loader: "esbuild-loader",
      },
      {
        loader: "tamagui-loader",
        options: tamaguiOptions,
      },
    ],
  },
  // {
  //   test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
  //   loader: "url-loader",
  //   options: {
  //     name: "[path][name].[ext]",
  //   },
  // },
];
