
### Development

```bash
yarn dev && curl http://localhost:3000/api/hello

## the following API response should be seen
{"myVar":"development","common":"common"}
```

### Production

```bash
yarn build && yarn start && curl http://localhost:3000/api/hello

## the following API response should be seen
{"myVar":"production","common":"common"}
```

### Local Override

```bash
echo "MY_VAR=local" > .env.local && yarn dev && curl http://localhost:3000/api/hello

## the following API response should be seen
{"myVar":"local","common":"common"}
```

