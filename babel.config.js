module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '@assets': './assets',
              '@images': './assets/images',
              '@components': './components',
              '@constants': './constants',
              '@config': './config',
              '@hooks': './hooks',
              '@actions': './redux/actions',
              '@reducers': './redux/reducers',
              '@icons': './constants/assets/icons.ts',
              '@logos': './constants/assets/logos.ts',
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          },
        ],
        'react-native-reanimated/plugin',
      ],
    };
  };