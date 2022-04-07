import { Injectable } from "@angular/core";
import { Location } from "../models/Location";

@Injectable({
    providedIn: 'root'
})

export class locationService {
    constructor() { }
    _locations: Location[] = [
        {
            name: "Edificio A",
            owner: "Kevin K.",
            description: "Biblioteca en la entrada"
        },
        {
            name: "Edificio X",
            owner: "Cesar A.",
            description: "Huele raro ahí"
        },
        {
            name: "Edificio V",
            owner: "Francisco H.",
            description: "Edificio para matemáticas"
        },
        {
            name: "Edificio Beta",
            owner: "Kevin K.",
            description: "Laboratorios de cómputo"
        },
        {
            name: "Edificio O",
            owner: "César A.",
            description: "Coordinación"
        },
        {
            name: "Edificio Alfa",
            owner: "Francisco H.",
            description: "Otro laboratorio de cómputo"
        },
    ]

    GetLocations(): Location[] {
        return this._locations;
    }
}
