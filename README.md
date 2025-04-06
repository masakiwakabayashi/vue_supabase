## Project Setup

```sh
npm install
```

```sh
npm run dev
```

## Test

```sh
npm run test:unit
```

## E2E Test

```sh
npx playwright test --ui
```

## Supabase

```sh
npx supabase start
```

```sh
npx supabase db reset
```

```sh
npx supabase status
```

### Create Migration

```sh
npx supabase db diff --use-migra -f {migration_name}
```


### Edge Functions

```sh
npx supabase functions new {function_name}
```

```sh
npx supabase functions serve
```









