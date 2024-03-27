import { Iphone } from "./iphone"

export interface Product {
  products: Iphone[]
  total: number
  skip: number
  limit: number
}
