export type Response<T> = {
  status: boolean
  code: number
  message: string
  data: T
}