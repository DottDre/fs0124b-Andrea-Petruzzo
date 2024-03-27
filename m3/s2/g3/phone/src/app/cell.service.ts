import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product';


@Injectable({
  providedIn: 'root'
})
export class CellService {
  apiUrl: string = 'https://dummyjson.com/products'

  constructor(private http:HttpClient){}

  getAllPhone(){
    return this.http.get<Product>(this.apiUrl)
  }
}
