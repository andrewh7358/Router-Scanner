export type methods = 'POST' | 'PATCH' | 'GET' | 'DELETE'

export class TrieNode {
  path: string
  methods: Set<methods>
  isEnd: boolean
  children: TrieNode[]

  constructor(path: string) {
    this.path = path
    this.methods = new Set()
    this.isEnd = false
    this.children = []
  }

  findIndex(path: string) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].path === path) {
        return i
      }
    }

    return -1
  }

  insert(paths: string[], method: methods) {
    if (paths.length === 0) {
      return
    }

    const curr = paths[0]
    const index = this.findIndex(curr)

    if (index === - 1) {
      const node = new TrieNode(curr)
      this.children.push(node)

      if (paths.length === 1) {
        node.isEnd = true
        node.methods.add(method)
      } else {
        node.insert(paths.slice(1), method)
      }
    } else {
      const node = this.children[index]

      if (paths.length === 1) {
        node.isEnd = true
        node.methods.add(method)
      } else {
        node.insert(paths.slice(1), method)
      }
    }
  }
}
