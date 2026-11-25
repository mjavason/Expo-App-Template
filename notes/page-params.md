In Expo, page parameters are primarily handled through **Expo Router**, which uses file-based routing. There are several ways to access route parameters, depending on whether they are dynamic path parameters, query parameters, or passed through navigation.

Assuming you're using Expo Router.

## **1.&#x20;**`useLocalSearchParams()`**&#x20;— standard method**

The most common way to get route params in Expo Router.

**File:** `app/users/[id].tsx`

URL: `/users/123?tab=settings`

```
import { useLocalSearchParams } from 'expo-router';

export default function UserPage() {
  const { id, tab } = useLocalSearchParams<{
    id: string;
    tab?: string;
  }>();

  return null;
}
```

Returns:

```
{
  id: '123',
  tab: 'settings'
}
```

Use this for normal page-level parameter access. It updates based on the focused route and avoids background screens responding to changes in the global URL.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.expo.dev\&sz=32)

Expo documentation+1



## **2.&#x20;**`useGlobalSearchParams()`**&#x20;— global URL params**

```
import { useGlobalSearchParams } from 'expo-router';

export default function UserPage() {
  const { id, tab } = useGlobalSearchParams<{
    id: string;
    tab?: string;
  }>();

  return null;
}
```

Unlike `useLocalSearchParams`, it tracks the globally active URL, even when the component is mounted in the background.

Use it for:

- Analytics
- Background route tracking
- Global observers
- Components that intentionally need the currently active URL

Avoid using it unnecessarily in screen UI because background screens can re-render as URL parameters change.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.expo.dev\&sz=32)

Expo documentation+1



## **3.&#x20;**`useLocalSearchParams()`**&#x20;with a typed route**

For stronger TypeScript typing, pass the route pattern as the generic instead of manually defining the parameter object.

```
import { useLocalSearchParams } from 'expo-router';

export default function UserPage() {
  const { id } = useLocalSearchParams<'/users/[id]'>();

  return null;
}
```

For a catch-all route such as `app/docs/[...slug].tsx`:

```
const { slug } = useLocalSearchParams<{
  slug: string[];
}>();

// /docs/react/hooks
// slug = ['react', 'hooks']
```

You can also combine route typing with search parameter typing:

```
const { id, tab } = useLocalSearchParams<
  '/users/[id]',
  { tab?: string }
>();
```

## **4.&#x20;**`router.push()`**&#x20;/&#x20;**`router.navigate()`**&#x20;— passing params**

You don't just retrieve parameters; you can pass them when navigating.

```
import { router } from 'expo-router';

router.push({
  pathname: '/users/[id]',
  params: {
    id: '123',
    tab: 'settings',
  },
});
```

The destination page receives them through `useLocalSearchParams()`.

```
const { id, tab } = useLocalSearchParams<{
  id: string;
  tab?: string;
}>();
```

This is useful when the route contains a dynamic segment and/or query parameters.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.expo.dev\&sz=32)

Expo documentation+1



## **5.&#x20;**`<Link>`**&#x20;— passing params declaratively**

### **Inline URL**

```
import { Link } from 'expo-router';

<Link href="/users/123?tab=settings">
  Open user
</Link>
```

### **Object-based href**

```
<Link
  href={{
    pathname: '/users/[id]',
    params: {
      id: '123',
      tab: 'settings',
    },
  }}
>
  Open user
</Link>
```

The receiving route reads both through `useLocalSearchParams()`.

[image](https://www.google.com/s2/favicons?domain=https://docs.expo.dev\&sz=32)

Expo documentation+1

## **6.&#x20;**`router.setParams()`**&#x20;— update params on the current page**

This changes current URL parameters without pushing a new screen onto the navigation stack.

```
import { router, useLocalSearchParams } from 'expo-router';

const { tab } = useLocalSearchParams<{ tab?: string }>();

router.setParams({ tab: 'profile' });
```

Useful for:

- Filters
- Pagination
- Tabs represented in the URL
- Updating dynamic route values

```
router.setParams({
  page: '2',
  search: 'react',
});
```

This updates the current URL rather than creating a new navigation entry.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.expo.dev\&sz=32)

Expo documentation+1



## **7.&#x20;**`usePathname()`**&#x20;— get the path itself**

```
import { usePathname } from 'expo-router';

const pathname = usePathname();

// Example: /users/123
```

This returns the pathname, **not a parsed params object**. You can manually extract values if needed.

```
const pathname = usePathname();
const id = pathname.split('/').at(-1);
```

Manual parsing is fragile if routes have multiple segments, optional segments, or URL encoding. Use `useLocalSearchParams()` for actual route parameters.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.expo.dev\&sz=32)

Expo documentation+1



## **8.&#x20;**`useSegments()`**&#x20;— get route segments**

```
import { useSegments } from 'expo-router';

const segments = useSegments();

// Example: ['users', '123']
```

You can extract a segment manually:

```
const segments = useSegments();
const id = segments[1];
```

However, segments are mainly useful for identifying route structure and route groups. They are not a replacement for typed params.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub+1



## **9.&#x20;**`useRoute()`**&#x20;— React Navigation route object**

If you are using React Navigation APIs directly within an Expo project:

```
import { useRoute } from '@react-navigation/native';

const route = useRoute();

console.log(route.params);
```

Type it:

```
import { useRoute, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  User: {
    id: string;
    tab?: string;
  };
};

const route = useRoute<RouteProp<RootStackParamList, 'User'>>();

const { id, tab } = route.params;
```

This is primarily a React Navigation approach. In Expo Router pages, prefer `useLocalSearchParams()` because Expo Router is built on top of React Navigation and manages URL-based route parameters.

## **Quick comparison**

| Method                         | What you get                       | Use case                      |
| ------------------------------ | ---------------------------------- | ----------------------------- |
| `useLocalSearchParams()`       | Current route's params             | **Default choice**            |
| `useGlobalSearchParams()`      | Global active URL params           | Analytics/global tracking     |
| Typed `useLocalSearchParams()` | Typed route params                 | Type-safe page data           |
| `router.push()`                | Navigate and pass params           | Navigation                    |
| `router.navigate()`            | Navigate and pass params           | Navigation                    |
| `<Link href>`                  | Declarative navigation with params | UI links                      |
| `router.setParams()`           | Modify current URL params          | Filters, tabs, pagination     |
| `usePathname()`                | Current pathname string            | Path inspection               |
| `useSegments()`                | Route segments array               | Route structure inspection    |
| `useRoute()`                   | React Navigation route object      | React Navigation integrations |

**Default pattern for most Expo Router pages:**

```
const { id } = useLocalSearchParams<{ id: string }>();
```

If you need the current page's params, use `useLocalSearchParams`. If you need to navigate with params, use `router.push` or `Link`. If you need to modify params without navigating, use `router.setParams`.

Official references:

- [Expo — URL Parameters](https://docs.expo.dev/router/reference/url-parameters/?utm_source=chatgpt.com)
- [Expo — Navigation](https://docs.expo.dev/router/basics/navigation/?utm_source=chatgpt.com)
- [Expo — Typed Routes](https://docs.expo.dev/router/reference/typed-routes/?utm_source=chatgpt.com)