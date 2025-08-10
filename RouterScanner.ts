import { methods, TrieNode } from './TrieNode'

export class RouterScanner {
  root: TrieNode

  constructor() {
    this.root = new TrieNode('root')
  }

  // assumes valid url
  addUrl(url: string, method: methods) {
    const paths = url.toLowerCase().split('/')
    this.root.insert(paths, method)
  }



  // assumes valid url
  isRequestSupported(url: string, method: methods) {
    console.log(`scanning for request '${method} ${url}'`)

    const paths = url.toLowerCase().split('/')
    let curr = this.root

    for (const path of paths) {
      let index = curr.findIndex(path)

      if (index === -1) {
        // try path parameter match
        index = curr.children.findIndex((child) => child.path.charAt(0) === ':')

        if (index === -1) {
          console.log(`request '${method} ${url}' is not supported`)
          return false
        }

        console.log(`parameter match [${curr.children[index].path}, ${path}]`)
      }

      curr = curr.children[index]
    }

    if (!curr.isEnd) {
      console.log(`request '${method} ${url}' is not supported`)
      return false
    }

    const isMethodAllowed = curr.methods.has(method)

    if (!isMethodAllowed) {
      console.log(`method ${method} is not supported for ${url}`)
      return false
    }

    console.log(`request '${method} ${url}' is supported`)
    return true
  }
}
