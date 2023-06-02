export const resolve = {
  symlinks: false,
  extensions: [
    ".js",
    ".ts",
    ".jsx",
    ".tsx",
    ".css",
    ".json",
    ".web.tsx",
    ".web.ts",
    ".web.js",
  ],
  alias: {
    "react-native$": "react-native-web-lite",
    "react-native-web$": "react-native-web-lite",
    "react-native-svg": require.resolve("@tamagui/react-native-svg"),
  },
};
