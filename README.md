# Router Scanner

Router scanner implementation in TypeScript. Scans to check if a HTTP request is supported. The scan supports path parameters in the url.

`addUrl`: Add a url to the router. This also includes the HTTP request method.

`isRequestSupported`: Check if a HTTP request is supported.

Example:
```
const router = new Router()
router.addUrl('user', 'POST')
router.addUrl('user/:id', 'PATCH')
router.isRequestSupported('user', 'POST') // true
router.isRequestSupported('user/1234', 'PATCH') // true
router.isRequestSupported('user/1234', 'POST') // false
```

## How to test

In the folder directory, run `npm install` then `tsc test.ts && node test.js` to run the tests.
