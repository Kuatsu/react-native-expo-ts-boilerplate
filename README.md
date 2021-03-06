# react-native-expo-ts-boilerplate

This is a simple boilerplate for React Native apps using Expo and TypeScript. It has the following features:
* Full TypeScript support 😍
* Expo, Expo EAS and `expo-dev-client` for easy development and deployment + using previously unsupported native modules with Expo 🚀
* State management using the lightweight & unopinionated library [zustand](https://github.com/pmndrs/zustand) 🐻
* Powerful, hook-based server synchronization & state management with [react-query](https://github.com/tannerlinsley/react-query) 💾
* Easy-to-use dark mode using the native `useColorScheme()` hook and a nifty helper function to merge your themed styles! ⚫️⚪️
* Simple [@react-navigation/native](https://github.com/react-navigation/react-navigation) Stack set-up 🗺
* Custom `Text` component for easily adding custom font families with different font weights into your project, either from local fonts or Google Fonts using [@expo-google-fonts](https://docs.expo.dev/guides/using-custom-fonts/)! 📝
* Localizations using [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/) and [i18n-js](https://www.npmjs.com/package/i18n-js) 🌍
* Unit testing with [Jest](https://github.com/facebook/jest) and the popular library [React Native Testing Library](https://github.com/callstack/react-native-testing-library)! 🔍
* Linting and preconfigured style guides using ESLint and great plugins like [airbnb](https://github.com/airbnb/javascript) and [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) ✅
* [Husky](https://github.com/typicode/husky) hook to lint commit messages using [conventional-commit rules](https://github.com/conventional-changelog/commitlint) 🥸
* Smart semantic versioning using [standard-version](https://github.com/conventional-changelog/standard-version) preconfigured for all version codes in `app.json` 👍
* Completely open-source using the [MIT license](https://github.com/Kuatsu/react-native-expo-ts-boilerplate/blob/master/LICENSE)! ✨

## Getting started
Simply clone this repository using `git clone https://github.com/Kuatsu/react-native-expo-ts-boilerplate my_cool_project` and start working. It's really that simple!

To build a development client, use `eas build --platform all --profile development` (or replace `all` with only `android` or `ios`). To run the bundler, use `expo start -c --dev-client`. For more, please refer to the Expo and EAS documentations.

To update to a new version, refer to the documentation of [standard-version](https://github.com/conventional-changelog/standard-version). The package is pre-configured to smartly update all needed versions and build numbers in both `app.json` and `package.json`.

To run unit tests, simply run `yarn test`.

## FAQ
### Why doesn't this boilerplate use Redux?
While we think Redux can be a great and versatile solution for many projects, it's often "overkill" for smaller and medium-sized projects. Handling all your global state in a multitude of files consisting of reducers and stores can be overwhelming especially for newer developers. That's why, for this boilerplate, we've settled for the popular [zustand](https://github.com/pmndrs/zustand) state management library: It's lightweight, heavily unopinionated and easy to understand even for developers new to React world.

## License
This project is released under the open-source [MIT License](https://github.com/Kuatsu/react-native-expo-ts-boilerplate/blob/master/LICENSE).
