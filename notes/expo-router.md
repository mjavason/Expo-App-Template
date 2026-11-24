# Expo File Based Routing

|File|Route|
|-|-|
|index.tsx |/ |
|about.tsx |/about |
|settings.tsx |/settings |
|users/index.tsx |/users |
|users/[id].tsx	|/users/:id |
|(app)/login.tsx |/login




## Special files you should know
|File/convention |Purpose |
|-|-|
|index.tsx |Default route for a directory
|_layout.tsx	|Defines the layout/|navigation for child routes
|[id].tsx	|Dynamic route parameter
|[...slug].tsx	|Catch-all route
|(group)/	|Route group; doesn't affect URL
|+not-found.tsx	|Custom unmatched route screen
|+middleware.ts	|Route middleware, where supported by your Router version/setup

---

# Router Quirks

|Thing	|Responsibility |
|-|-|
|app/index.tsx	|Defines a screen at / |
|app/products/[id].tsx	|Defines a dynamic product screen |
|_layout.tsx	|Defines a navigator/layout for its child routes |
|```<Stack />```	|Manages stack-based navigation and history |
|```<Tabs />```	|Manages tab selection and tab navigation |
|```<Drawer />```	|Manages drawer-based navigation|
|router.push("/x")	|Navigates to route /x, adding to history when appropriate|
|router.replace("/x")	|Navigates to /x, replacing the current history entry|
|router.back()	|Goes back in navigation history|
|```<Link href="/x">```	|Declarative way of triggering navigation to /x|
