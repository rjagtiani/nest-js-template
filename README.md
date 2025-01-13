<h1 align="center">⭐ NestJS Service Template ⭐</h1>

<p align="center">
  Simple template with Nest JS + Fastify + Typescript + Jest
</p>


## Considerations

1. Fully dockerized service ready for development and production environments with the best practices for docker, trying to provide a performance and small image just with the code we really need in your environments.
2. Use [Fastify](https://fastify.dev/) as Web Framework as a performant improver. You can check [here](https://github.com/fastify/benchmarks#benchmarks) comparison between different web frameworks.3 
3. Testing with [Jest](https://github.com/jestjs/jest) and [Jest-Cucumber](https://github.com/bencompton/jest-cucumber) for unit and e2e tests also code coverage is more precise with this combination as cucumber is runing under jest.
4. CI/CD through GitHub Actions

## Usage

```bash
cp .env.example .env
nvm use
npm ci
npm run start:api:dev
```

## Building

```bash
npm run build
```

## Testing and Linting

The service provide different scripts for running the tests, to run all of them you can run:

```bash
npm run test
```

If you are interested just in the unit tests, you can run:

```bash
npm run test:unit
```

Or if you want e2e tests, you can execute:

```bash
npm run test:e2e
```

For eslint:
```bash
npm run test:lint
```

For eslint fix:
```bash
npm run test:lint:fix
```