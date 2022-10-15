import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/Product";

import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoreApiService {

    API_URL = 'https://fakestoreapi.com'

    constructor(private http: HttpClient) {
        
    }

    public getProduct() {
        return this.http.get<Product[]>(`${this.API_URL}/products`);
    }
    public getProductById(id: number) {
        let options = {
            headers: new HttpHeaders(),
            params: new HttpParams()
        }
        return this.http.get<Product>(`${this.API_URL}/products/${id}`, options);
    }
}