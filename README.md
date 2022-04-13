# # Vite React and Typescript Template

## Packages

### UI Library

- [React/ReactDOM 18](https://reactjs.org/)

### Build Tools

- [Vite](https://vitejs.dev/)
- [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker)
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)
- [Typescript 4.6](https://www.typescriptlang.org/)

### Styling

- [CSS Modules](https://github.com/css-modules/css-modules)
- [typescript-plugin-css-modules](https://github.com/mrmckeb/typescript-plugin-css-modules)

### Testing

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Static Analysis and Formatting

- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Prettier](https://prettier.io/)

## Scripts

### `build`

```bash
npm run build
```

Builds the React App into static files.

### `dev`

```bash
npm run dev
```

Runs serves the react app through the dev server.

### `dev:clean`

```bash
npm run dev:clean
```

Clears the optimizer's cache and runs serves the react app through the dev server.

### `lint`

```bash
npm run lint
```

Runs the codebase through the linter.

### `lint:fix`

```bash
npm run lint
```

Runs the codebase through the linter and attempts to fix any problems.

### `serve`

```bash
npm run serve
```

Locally serves the production assets from the build directory.

### `start`

```bash
npm start
```

Alias for `npm run dev`.

### `test`

```bash
npm test
```

Runs the test suite. if `CI=true`, then the test suite will not run in interactive mode.

### `test:coverage`

```bash
npm test:coverage
```

Runs the test suite and checks for code coverage.

### `typecheck`

```bash
npm typecheck
```

Runs the typechecker over the codebase.
