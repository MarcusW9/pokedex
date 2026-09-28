# JS Template

A minimal vanilla JavaScript starter for [The Odin Project](https://www.theodinproject.com/) JavaScript course.

## Stack

| Tool                                                                                  | Purpose                                  |
| ------------------------------------------------------------------------------------- | ---------------------------------------- |
| [pnpm](https://pnpm.io/)                                                              | Package manager                          |
| [Vite](https://vite.dev/)                                                             | Dev server and bundler                   |
| [Jest](https://jestjs.io/)                                                            | Test runner                              |
| [jest-environment-jsdom](https://jestjs.io/docs/configuration#testenvironment-string) | Browser-like DOM for tests               |
| [Babel](https://babeljs.io/)                                                          | Lets Jest understand ES module `import`s |
| [oxlint](https://oxc.rs/docs/guide/usage/linter)                                      | Linter                                   |
| [Prettier](https://prettier.io/)                                                      | Formatter                                |

## Getting started

```bash
corepack enable   # once per machine, provides pnpm
pnpm install
pnpm dev
```

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the dev server with hot reload |
| `pnpm test`    | Run tests in watch mode              |
| `pnpm build`   | Build for production into `dist/`    |
| `pnpm preview` | Serve the production build locally   |
| `pnpm lint`    | Lint with oxlint                     |
| `pnpm format`  | Format all files with Prettier       |

Run tests once (no watch) with `pnpm jest`.

## Project structure

```
├── index.html            # HTML entry, loads src/main.js
├── public/               # Static assets served as-is
├── src/
│   ├── main.js           # JS entry, renders the page
│   ├── counter.js        # Example module
│   ├── counter.test.js   # Example tests
│   └── style.css         # Global styles and CSS reset
├── jest.config.js        # Jest config (jsdom environment)
├── babel.config.cjs      # Babel config, used only by Jest
├── pnpm-workspace.yaml   # pnpm settings (dependency build scripts)
├── .oxlintrc.json        # Linter config
├── .github/workflows/  # GitHub Pages deploy
└── .prettierrc           # Formatter config
```

## Testing

Tests live next to the module they test, named `*.test.js`. Jest globals (`describe`, `it`, `expect`, `beforeEach`) are available without importing.

```js
import { setupCounter } from './counter.js'

it('increments on click', () => {
  document.body.innerHTML = '<button id="counter"></button>'
  const button = document.querySelector('#counter')
  setupCounter(button)
  button.click()
  expect(button.textContent).toBe('Count is 1')
})
```

Keep logic in small, pure functions where you can. They're the easiest to test.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` tests, builds and deploys the site on every push to `main`. The Vite `base` path is set automatically from the repo name.

One-time setup per repo: **Settings → Pages → Source: GitHub Actions**. The site is then live at `https://<username>.github.io/<repo-name>/`. Check progress or errors in the repo's **Actions** tab.

## Using this template

1. On GitHub, click **Use this template** to create a new repo.
2. Rename `name` in `package.json` and `<title>` in `index.html`.
3. Enable Pages (see above).
4. Replace `counter.js` and its test with your own modules.
