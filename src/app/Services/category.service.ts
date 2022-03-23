import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../Models/Category";

@Injectable({
    providedIn: 'root'
})

export class CategoryService{
    constructor(private http: HttpClient) { }
    private URL = 'api/categories.json';

    GetCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.URL);
    }
}
