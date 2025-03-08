# Slack Clone

## Docs

- auth
  - https://labs.convex.dev/auth/setup
  - https://labs.convex.dev/auth/authz/nextjs

## Commands

- pnpm dev (Next.js)
- pnpm dlx convex dev (Convex)
  - Create a table
    - pnpm dlx convex import --table tasks sampleData.jsonl
  - Add auth
    - pnpm dlx @convex-dev/auth

## Convex

- Anything defined in /convex folder and any .ts functions

## Structure of project

### layout.tsx

- ConvexClientProvider
  - children

### auth logic

- convex/users.ts -> logic of querying db
- Hook to call query of db -> src/features/auth/hooks/use-current-user.ts

### Endpoints

- /auth -> AuthScreen

### page.tsx

- AuthScreen
  - SignInCard
    - Card
      - CardHeader
        - CardTitle
        - CardDescription
      - CardContent
        - form
          - Input
          - Button
        - Seperator
        - div
          - Button
            - Icon
            - {text}
        - p
          - {text}
          - span
  - SignUpCard

## Use Shadcn

- init
  - pnpm dlx shadcn@latest init
    - default
    - slate
- Button
  - variants -> can add new variants

## Tailwind

- Add any new folders in tailwind.config.ts
- space-y-5
  - Spaces elements in div by 5 units

## CSS

- made body, html, :root height 100%
