# 🧪 Expo React Native Template

This repository is a **boilerplate project** to quickly kickstart a **React Native** app using the **Expo Managed Workflow**, with the following technologies already integrated:

- ⚛️ **Expo** (React Native in managed mode)
- 💨 **Tailwind CSS via NativeWind**
- 🖼️ **SVG support as React components**
- ⚙️ **cross-env** for handling environment variables across OSes

---

## 📦 Included Technologies

| Technology               | Version | Description                                      |
|--------------------------|---------|--------------------------------------------------|
| `expo`                   | ^52.x   | React Native framework with managed workflow     |
| `nativewind`             | ^4.x    | Utility-first styling with Tailwind CSS          |
| `react-native-svg`       | ^15.x   | SVG support in React Native                      |
| `react-native-svg-transformer` | ^1.x | Import SVG files as React components     |
| `cross-env`              | ^7.x    | Cross-platform environment variable support      |

---

## 🚀 Quick Start

1. **Clone the repository:**

```bash
git clone https://github.com/your-user/your-template.git
cd your-template
```

## 📁 Project Structure

├── app/ # Main route directory (expo-router)

├── components/ # Reusable components 

├── global.css # Tailwind directives (@tailwind base, etc.) 

├── metro.config.js # Config for NativeWind + SVG 

├── tailwind.config.js # Tailwind config 

├── babel.config.js # Babel config with NativeWind plugin


---

## 🎯 Available Scripts

| Script         | Description                                       |
|----------------|---------------------------------------------------|
| `yarn dev`     | Start Expo with `APP_VARIANT=development`         |
| `yarn preview` | Start Expo with `APP_VARIANT=preview`             |
| `yarn android` | Run app on Android device/emulator                |
| `yarn ios`     | Run app on iOS simulator (macOS only)             |
| `yarn web`     | Start the web version (React DOM)                 |

---

## 📘 Notes

- Tailwind CSS is powered by **NativeWind** — no need for PostCSS or autoprefixer.
- SVG files can be imported as components:

```tsx
import Logo from './assets/logo.svg';

<Logo width={100} height={100} />
```
---

The `APP_VARIANT` environment variable is managed via **cross-env**.

---

## 🧑‍💻 Author

Created by [@dima](https://github.com/dimainc26)  
With ❤️. You can see here [dima](www.dimazanre.com)
