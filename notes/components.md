## **React Native / Expo components**

React Native uses components instead of HTML tags. The following are the major components, their purposes, and how they work.

### **1. Layout and structure**

| Component              | Description                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `View`                 | The primary container component. Used to group components, create layouts, and organize screen content. Similar to a `div`. |
| `SafeAreaView`         | Keeps content within the safe visible area of a device, avoiding notches and system UI.                                     |
| `ScrollView`           | Creates a scrollable container. Renders all its children, making it suitable for relatively small amounts of content.       |
| `KeyboardAvoidingView` | Adjusts its layout when the software keyboard appears, helping prevent inputs from being obscured.                          |

### **2. Text**

| Component | Description                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------ |
| `Text`    | Displays text. Supports nested text components for inline styling, such as bold and italic text. |

### **3. User interaction**

| Component            | Description                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `Button`             | A basic, platform-styled button. Supports a title and an `onPress` callback.                                          |
| `Pressable`          | A flexible component that detects press interactions. Supports pressed-state styling and press lifecycle events.      |
| `TouchableOpacity`   | Detects touches and reduces its opacity when pressed.                                                                 |
| `TouchableHighlight` | Detects touches and displays a highlight effect when pressed.                                                         |
| `TextInput`          | Accepts user input. Supports placeholders, keyboard configuration, password input, multiline text, and change events. |
| `Switch`             | A native toggle control for boolean values, such as enabling or disabling a setting.                                  |

### **4. Images and media**

| Component         | Description                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| `Image`           | Displays local or remote images. Supports resizing modes, dimensions, and image loading callbacks. |
| `ImageBackground` | Displays an image behind other components, allowing you to place text and other content over it.   |
| `VideoView`       | Displays video content using the `expo-video` package.                                             |
| `WebView`         | Embeds web pages inside your application using `react-native-webview`.                             |

### **5. Lists and data rendering**

| Component         | Description                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| `FlatList`        | Efficiently renders large lists using virtualization. Only renders items needed around the visible area. |
| `SectionList`     | Renders lists grouped into sections, each potentially having its own header.                             |
| `VirtualizedList` | The underlying configurable virtualization component used by list components.                            |
| `RefreshControl`  | Adds pull-to-refresh functionality to scrollable content.                                                |

### **6. Navigation and overlays**

| Component | Description                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| `Modal`   | Displays content in an overlay above the current screen. Useful for dialogs, confirmation screens, and popups. |
| `Link`    | Expo Router component for navigating between application routes.                                               |
| `Slot`    | Expo Router component that renders the matching child route.                                                   |
| `Stack`   | Expo Router navigator that presents screens in a stack-based navigation structure.                             |
| `Tabs`    | Expo Router navigator that provides tab-based navigation.                                                      |
| `Drawer`  | Expo Router navigator that provides drawer-based navigation.                                                   |

Note: `Link`, `Slot`, `Stack`, `Tabs`, and `Drawer` come from Expo Router, not React Native core.

### **7. Device and system components**

| Component                | Description                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `StatusBar`              | Controls the device status bar, including its appearance and text color.                                                   |
| `ActivityIndicator`      | Displays a loading spinner, typically while asynchronous operations are running.                                           |
| `KeyboardAvoidingView`   | Adjusts content positioning when the keyboard is displayed.                                                                |
| `InputAccessoryView`     | Displays a custom accessory view above the keyboard on iOS.                                                                |
| `Platform`               | Not a visual component, but a React Native API for detecting the current platform and handling platform-specific behavior. |
| `Dimensions`             | Not a visual component, but an API for retrieving screen or window dimensions.                                             |
| `SafeAreaProvider`       | Provides safe-area information to components using `react-native-safe-area-context`.                                       |
| `GestureHandlerRootView` | Root container required for gesture handling with `react-native-gesture-handler`.                                          |

### **8. Animation and graphics**

| Component / API       | Description                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Animated.View`       | An animatable version of `View`, used for opacity, position, scale, and other animated properties.                         |
| `Animated.Text`       | An animatable text component.                                                                                              |
| `Animated.Image`      | An animatable image component.                                                                                             |
| `Animated.ScrollView` | An animatable scroll view.                                                                                                 |
| `Animated.FlatList`   | An animatable flat list.                                                                                                   |
| `Canvas`              | Expo-compatible graphics component provided by libraries such as React Native Skia. Used for custom drawing and rendering. |

## **Important things to remember**

1. `View`**&#x20;is your primary layout building block.** Use it to structure almost every screen.
2. `Text`**&#x20;is mandatory for rendering text.** You cannot place raw text directly inside a `View`.
3. `Pressable`**&#x20;is generally preferable to older touchable components** because it offers more interaction control.
4. **Use&#x20;**`FlatList`**&#x20;for dynamic or large datasets**, rather than mapping everything inside a `ScrollView`.
5. **Expo packages extend React Native.** Components such as `VideoView` and navigation components come from additional packages.

The majority of your everyday Expo development will involve `View`, `Text`, `TextInput`, `Pressable`, `Image`, `ScrollView`, and `FlatList`.