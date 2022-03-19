import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Ticket } from "../Models/Ticket";

@Injectable({
    providedIn: 'root'
})

export class TicketService {
    private ticketUrl = 'src/API/Tickets.json';
    constructor(private http: HttpClient) { }

    getTickets(): Observable<Ticket[]>{
        // return this.http.get<Ticket[]>(this.ticketUrl);
        return this.http.get<Ticket[]>(this.ticketUrl).pipe
        (tap(data => console.log("All: ", JSON.stringify(data))),
        catchError(this.handleError));
    }

    // addTickets(ticket: Ticket): Observable<any>{
    //     const headers = {'content-type':'application/json'}
    //     const body = JSON.stringify(ticket);
    //     return this.http.post(this.ticketUrl,body,{'headers':headers});
    // }

    private handleError(err: HttpErrorResponse){
        return throwError("Algo salio mal");
    }
}
