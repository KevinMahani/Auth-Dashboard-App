export interface User {
  name: {
    first: string
    last: string
    title?: string
  }
  email: string
  picture: {
    large: string
    thumbnail?: string
  }
}
