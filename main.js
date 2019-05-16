// stack -> LIFO Last in first stop
// queue - > FIFO First in last stop
// tree

array = ['roy', 'morgan', 'kelly', 'matthew', 'john']

class Stack {
  constructor(arr) {
    this.list = arr
  }

get() {
  let item = this.list.pop()
  this.list.push(item)
  return item
}

add(item) {
  this.list.push(item)
}
}

class Queue {
  constructor(arr) {
    this.list = arr
  }

  get() {
    return this.list[0]
  }

  add(item) {
    return this.list.push()
  }

}

let stack = new Stack(array)
let queue = new Queue(array)


let Kingdom = {
   king: {name: 'Roy', knights: {k1: 'Lucina', k2: 'Marth'}},
   queen: {name: 'Peach', children: {prince: 'Mario', princess: 'Daisy'}, grandson: {name: 'Jeffrey'}}
}
