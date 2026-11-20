# **Updating Expo app.json on a New Project**

When creating a new Expo project, especially when using an existing template, there are a few important configurations you should update to make the project your own and avoid conflicts with the original project.

The most important things to change are the application name, slug, deep-link scheme, native application identifiers, Firebase configuration, EAS project association, and application assets.

## **App.json**

Start by updating your `app.json` file.

The following properties should be customized:

| Property               | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `name`                 | Application name displayed on the device.                             |
| `slug`                 | Unique Expo project name.                                             |
| `scheme`               | Custom URL scheme used for deep linking and authentication redirects. |
| `version`              | Application version.                                                  |
| `ios.bundleIdentifier` | Unique iOS application identifier.                                    |
| `android.package`      | Unique Android application identifier.                                |
| `icon`                 | Main application icon.                                                |
| `ios.icon`             | iOS application icon.                                                 |
| `web.favicon`          | Web application favicon.                                              |

For example:

```
{
  "expo": {
    "name": "MyApp",
    "slug": "my-app",
    "version": "1.0.0",
    "scheme": "myapp",

    "ios": {
      "bundleIdentifier": "com.yourname.myapp"
    },

    "android": {
      "package": "com.yourname.myapp"
    }
  }
}
```

**Important considerations:**

- Use a unique `slug` for your Expo project.
- Use a unique `scheme` to avoid deep-link conflicts with other applications.
- Use your own reverse-domain namespace for `bundleIdentifier` and `package`.
- Keep the Android package and iOS bundle identifier consistent where practical.
- Avoid changing native application identifiers after publishing because they determine your application's identity in the app stores.

## **Init**

After customizing your application identifiers, initialize EAS for your new project.

Run:

```
npx eas-cli@latest init
```

This associates your local Expo project with an EAS project and configures its project ID.

If you already have an EAS project, you can associate your application with that existing project instead.

**Do not randomly generate a project ID.** EAS manages this identifier.

## **Splash Screen and Adaptive Icons**

Replace the template's default application assets with your own branding.

Pay particular attention to:

**1. Application icon**

```
"icon": "./assets/images/icon.png"
```

Replace the existing icon with your application logo.

**2. iOS icon**

```
"ios": {
  "icon": "./assets/images/ios-icon.png"
}
```

Use your own iOS application icon.

**3. Android adaptive icons**

```
"adaptiveIcon": {
  "backgroundColor": "#FFFFFF",
  "foregroundImage": "./assets/images/android-icon-foreground.png",
  "monochromeImage": "./assets/images/android-icon-monochrome.png"
}
```

Replace the foreground and monochrome images with your own assets. Customize the background color to match your branding.

**4. Splash screen**

```
[
  "expo-splash-screen",
  {
    "backgroundColor": "#FFFFFF",
    "image": "./assets/images/splash-icon.png",
    "imageWidth": 120
  }
]
```

Replace the splash screen image and background color with your application's branding.

**5. Web favicon**

```
"web": {
  "favicon": "./assets/images/favicon.png"
}
```

Replace the existing favicon with your own.

Remember that changing the image paths in `app.json` does not create the image files. Ensure that the referenced assets actually exist.

## **Search Entire Project for Old Identifiers**

Updating `app.json` isn't enough. Template identifiers may also exist elsewhere in your project.

Use VS Code's global search (`Ctrl + Shift + F`) to search for:

- The old application name.
- The old Expo slug.
- The old Android package name.
- The old iOS bundle identifier.
- The old URL scheme.
- The old Firebase project identifiers.

Also inspect the following files and configurations:

| File / Location              | What to check                                      |
| ---------------------------- | -------------------------------------------------- |
| `app.json`                   | Application identity and native configuration.     |
| `eas.json`                   | EAS build and distribution profiles.               |
| `package.json`               | JavaScript package name and scripts.               |URLs.             |
| Environment files            | API URLs and project-specific credentials.         |
| Source code                  | Hardcoded application names, identifiers and URLs. |

**Important:** Don't blindly replace every occurrence of an old identifier. Some references may belong to dependencies, third-party services, or intentionally shared backend configurations.

The objective is to ensure that your new application has its own identity, native configuration, branding, and EAS association without accidentally breaking existing integrations.