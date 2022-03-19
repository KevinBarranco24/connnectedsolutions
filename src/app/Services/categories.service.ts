import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "../Models/Category";

@Injectable({
    providedIn: 'root'
})

export class CategoriaService{
    private Url = 'Api/Categorias.json';
    constructor(private http: HttpClient) { }

    getCategories(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.Url);
    }
}
