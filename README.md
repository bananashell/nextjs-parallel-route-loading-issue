This is a demo nextjs project to showcase issues with parallel routes and loading.
If a loading.tsx is added to the root of a parallel route it only uses that suspense boundary on the root level.

Give this tree

```
/ (root)
    @header
        page.tsx
        default.tsx
        loading.tsx
    /a
        page.tsx
        loading.tsx
    /b
        page.tsx
        loading.tsx
```

-   navigating to `/` will use the loading.tsx if `@header/page.tsx` is async
-   navigating to `/a`directly would not use the loading.tsx for `@header` and prevent streaming from happening

The only solution I've found for this is to manually add a Suspense boundary to `default.tsx`

```tsx
// @header/default.tsx
import HeaderSlot from "./page";
import { Suspense } from "react";
import Loading from "./loading";

export default function DefaultSlot() {
    return (
        <Suspense fallback={<Loading />}>
            <HeaderSlot />
        </Suspense>
    );
}
```
