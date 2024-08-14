# Reproduce NX 18 issue
### When building the app with a a package.json NX does not include [uWebSockets.js library](https://github.com/uNetworking/uWebSockets.js).

# Instructions:

Install `org` project (this reproduction project)
```sh
npm i
```

Build app `org` 
```sh
npx nx run org:build --generatePackageJson
```


Observe missing `uWebSockets.js` is missing from the generated [dist/apps/package.json](dist/apps/org/main.js) (need to run locally to access this link)

```json
{
  "name": "org",
  "version": "0.0.1",
  "dependencies": {
    "koa": "2.14.2"
  },
  "main": "./main.js",
  "type": "commonjs"
}
```

Notice that [main.ts](apps/org/src/main.ts) file imports the lib and uses it.