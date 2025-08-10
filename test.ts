import { RouterScanner } from './RouterScanner'

const router = new RouterScanner()

router.addUrl('user', 'POST')
router.addUrl('user/:id', 'PATCH')
router.addUrl('user/:id/profile', 'GET')
router.addUrl('user/:id', 'DELETE')
router.addUrl('user/:id/avatar/share', 'POST')

console.log(router.isRequestSupported('user', 'POST'), '\n') // true
console.log(router.isRequestSupported('foo', 'POST'), '\n') // false

console.log(router.isRequestSupported('user/1234', 'PATCH'), '\n') // true
console.log(router.isRequestSupported('user/1234', 'POST'), '\n') // false

console.log(router.isRequestSupported('user/1234/profile', 'GET'), '\n') // true
console.log(router.isRequestSupported('user/1234', 'GET'), '\n') // false

console.log(router.isRequestSupported('user/1234', 'DELETE'), '\n') // true

console.log(router.isRequestSupported('user/1234/avatar/share', 'POST'), '\n') // false
console.log(router.isRequestSupported('user/1234/avatar', 'POST'), '\n') // false
