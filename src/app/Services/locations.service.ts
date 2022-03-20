import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Ubicacion } from "../Models/Location";
import { Ticket } from "../Models/Ticket";

@Injectable({
    providedIn: 'root'
})

export class locationService {
    ubicaciones: Ubicacion[] = [
        {
            nombre: "Edificio A",
            requisitor: "Kevin K.",
            descripcion: "Control escolar."
            },
            {
            nombre: "Edificio X",
            requisitor: "Kevin K.",
            descripcion: "Edificio de ing en computación."
            },
            {
            nombre: "Edificio Alfa",
            requisitor: "Kevin K.",
            descripcion: "Laboratorios de cómputo."
            },
            {
            nombre: "Edificio Beta",
            requisitor: "Kevin K.",
            descripcion: "Labortatorios de cómputo."
            },
            {
            nombre: "Edificio W1",
            requisitor: "Kevin K.",
            descripcion: "Edificio de matemáticas."
            },
            {
            nombre: "Edificio W2",
            requisitor: "Kevin K.",
            descripcion: "Edificio de matemáticas."
            }
    ]
    constructor() { }

    getLocations(): Ubicacion[]{
        return this.ubicaciones;
    }

    addLocation(ub: Ubicacion) {
        this.ubicaciones.push(ub);
    }

    // getTickets(): Observable<Ticket[]>{
    //     // return this.http.get<Ticket[]>(this.ticketUrl);
    //     return this.http.get<Ticket[]>(this.ticketUrl).pipe
    //     (tap(data => console.log("All: ", JSON.stringify(data))),
    //     catchError(this.handleError));
    // }

    // addTickets(ticket: Ticket): Observable<any>{
    //     const headers = {'content-type':'application/json'}
    //     const body = JSON.stringify(ticket);
    //     return this.http.post(this.ticketUrl,body,{'headers':headers});
    // }

    // private handleError(err: HttpErrorResponse){
    //     return throwError("Algo salio mal");
    // }
}
