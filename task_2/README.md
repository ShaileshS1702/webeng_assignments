# Assignment 2 — JavaScript and TypeScript

Build a CSV data explorer using TypeScript and browser APIs. Work through the exercise independently and run it locally. You do not need to hand in your code or publish a website. Parts of the exercise will be covered in an in-lecture quiz.

## Run locally

Install Node.js with npm if it is not already available. From the starter-code directory:

```sh
cd src
npm ci
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). Keep the terminal running while you work; press Ctrl+C to stop the server. Changes to your source files appear in the browser during development.

The `package.json` is inside `src`, so run all npm commands there.

## Work on the exercise

- Start in `src/ts/main.ts` and use the helper in `src/ts/csv.ts` to read CSV data.
- The HTML and CSS are provided. Implement the exercise logic in TypeScript.
- Only edit exercise files inside `src`. Do not change `tsconfig.json` or add dependencies.
- Use a comma-separated CSV with a header row. The course page provides `KANTON_ZUERICH_418.csv` for testing with a larger dataset.
- Check the assignment page for the five tasks, hints, and expected behavior.

## Check and format your code

```sh
npm run tsc
npm run format
```

`tsc` checks TypeScript errors without generating JavaScript files. The starter includes Font Awesome, Pico CSS, and `json-2-csv`; Vite runs the development server and Prettier formats the code.

## Optional: run locally with Docker

Docker is optional. From this directory:

```sh
docker build -t assignment02-local .
docker run --rm -p 127.0.0.1:5173:5173 assignment02-local
```

Open http://localhost:5173. Rebuild the image after changing files when using this Docker workflow. The npm workflow above is recommended for editing.

No GitLab CI pipeline, Kubernetes cluster, or remote deployment is needed.
