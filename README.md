# Next.js router.push Unexpected Behavior

This repository demonstrates a bug where `router.push` in Next.js does not work as expected under certain conditions.  The navigation to `/another-page` fails to occur, or leads to unexpected behavior. The exact conditions which cause this issue, and potential solutions are provided in the accompanying files.

## Bug Description

The `router.push` method within a Next.js component fails to trigger the expected navigation. This issue is not consistently reproducible and may be tied to specific environmental conditions or component configurations.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Observe the unexpected behavior when clicking the button.