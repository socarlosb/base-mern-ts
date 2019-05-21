# Starter pack for a full MERN app

## Todo

- [ ] make a connection example with mongodb
- [ ] add script to start a mongodb docker container for development
- [ ] add more todo's

## Start

Install dependencies

```sh
npm run prep:server
npm run prep:client
```

Create a `.env` file on the src/server and add your server options

```
NODE_PORT=3000
NODE_ENV="development"
```

> NODE_ENV accepts "development" and "production"

For more app options check the `src/server/configs` folder

Start development by:

```sh
npm run start:server
npm run start:client
```

To build your app run:

```sh
npm run build
npm run deploy
```

After that you can run `docker-compose up -d` on your root directory to see your live app.

## Notes

- If you change your server PORT, also match it in the `src/client/package.json` file, the _proxy_ parameter
