import { ExpoConfig, ConfigContext } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: getAppName(),
  name: getAppName(),
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    permissions: [
      "android.permission.RECORD_AUDIO",
      "android.permission.ACCESS_COARSE_LOCATION",
      "android.permission.ACCESS_FINE_LOCATION",
      "android.permission.CAMERA",
    ],
    package: getUniqueIdentifier(),
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "@rnmapbox/maps",
      {
        RNMapboxMapsDownloadToken: process.env.EXPO_PUBLIC_MAPBOX_SK,
        RNMapboxMapsVersion: process.env.EXPO_PUBLIC_MAPBOX_VERSION,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});

function getAppName() {
  if (IS_DEV) {
    return "RNMapbox (dev)";
  }

  if (IS_PREVIEW) {
    return "RNMapbox (preview)";
  }

  return "RNMapbox";
}

function getUniqueIdentifier() {
  if (IS_DEV) {
    return "com.yevhen.rnmapbox.dev";
  }

  if (IS_PREVIEW) {
    return "com.yevhen.rnmapbox.preview";
  }

  return "com.yevhen.rnmapbox";
}
