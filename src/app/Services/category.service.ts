import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/Category";

@Injectable({
    providedIn: 'root'
})

export class CategoryService{
    constructor(private http: HttpClient) { }
    //private URL = 'api/categories.json';

    _categories: Category[] = [
        {
            "name": "Conexión a internet",
            "owner": "Kevin K.",
            "description": "Problemas relacionados a conexión a internet."
        },
        {
            "name": "Puerta cerrada",
            "owner": "César A.",
            "description": "La puerta del salón se encuentra cerrada."
        },
        {
            "name": "Objeto perdido dentro del salón",
            "owner": "Francisco H.",
            "description": "Objetos olvidados que se quedaron dentro del salón."
        },
        {
            "name": "Televisión apagada",
            "owner": "Kevin K.",
            "description": "El televisor de los salones no prende."
        },
        {
            "name": "Cosas perdidas",
            "owner": "Kevin K.",
            "description": "Ayuda para recuperar cosas perdidas"
        },
        {
            "name": "Asistencia general",
            "owner": "Kevin K.",
            "description": "Si podemos ayudar en algo, lo haremos"
        }
    ];

    GetCategories(): Category[] {
        return this._categories;
    }
}
