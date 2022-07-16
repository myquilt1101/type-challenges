type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }
// type a = MyPick<Todo, 'title'>
