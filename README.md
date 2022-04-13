# Vite React and Typescript Template

## Install

Run the following script to install dependencies:

```sh
npm i
```

Then, run:

```sh
cp .env.sample .env
```

> The .env file contains the following enviroment variables:
>
> - `SERVER_OPEN_BROWSER`: If `true`, will open the browser when a `dev` script is ran.
> - `SERVER_PORT`: The port the dev server should run on.

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

```sh
npm run build
```

Builds the React App into static files.

### `dev`

```sh
npm run dev
```

Runs serves the react app through the dev server.

### `dev:clean`

```sh
npm run dev:clean
```

Clears the optimizer's cache and runs serves the react app through the dev server.

### `lint`

```sh
npm run lint
```

Runs the codebase through the linter.

### `lint:fix`

```sh
npm run lint
```

Runs the codebase through the linter and attempts to fix any problems.

### `serve`

```sh
npm run serve
```

Locally serves the production assets from the build directory.

### `start`

```sh
npm start
```

Alias for `npm run dev`.

### `test`

```sh
npm test
```

Runs the test suite. if `CI=true`, then the test suite will not run in interactive mode.

### `test:coverage`

```sh
npm test:coverage
```

Runs the test suite and checks for code coverage.

### `typecheck`

```sh
npm typecheck
```

Runs the typechecker over the codebase.
