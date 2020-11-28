import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly baseUrl: string = 'http://localhost:8080/api/products/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }
}
