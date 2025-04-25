import { ConfigContext, ExpoConfig } from "@expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.your.slug.dev";
  }

  if (IS_PREVIEW) {
    return "com.your.slug.preview";
  }

  return "com.your.slug";
};

const getAppName = () => {
  if (IS_DEV) {
    return "MyApp (Dev)";
  }

  if (IS_PREVIEW) {
    return "MyApp (Preview)";
  }

  return "MyApp";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "myapp",
  version: "1.0.1",
  orientation: "portrait",
  icon: "./assets/logo.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
    // infoPlist: {
    //   ITSAppUsesNonExemptEncryption: false,
    //   NSLocationWhenInUseUsageDescription:
    //     "Questa app utilizza la tua posizione per fornire contenuti personalizzati e migliorare l'esperienza utente.",
    // },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    intentFilters: [
      {
        action: "VIEW",
        data: [
          {
            scheme: "https",
            host: "com.your.slug",
            pathPrefix: "/out/",
          },
          {
            scheme: "myapp",
            pathPrefix: "/out/",
          },
        ],
        category: ["BROWSABLE", "DEFAULT"],
      },
    ],
    package: getUniqueIdentifier(),
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
  ],
  experiments: {
    typedRoutes: true,
  },

  extra: {
    APP_VARIANT: process.env.APP_VARIANT,
    router: {
      origin: false,
    },
  },
});
