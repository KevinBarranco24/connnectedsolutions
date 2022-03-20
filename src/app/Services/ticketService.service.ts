import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Ticket } from "../Models/Ticket";

@Injectable({
    providedIn: 'root'
})

export class TicketService {
    constructor(private http: HttpClient) { }
    _ticketList: Ticket[] = []

    getTickets(): Ticket[]{
        return this._ticketList;
    }

    addTicket(t: Ticket){
        this._ticketList.push(t);
    }

    // getTickets(): Observable<Ticket[]>{
    //     return this.http.get<Ticket[]>(this.ticketUrl);
    // }

    // addTickets(ticket: Ticket): Observable<any>{
    //     const headers = {'content-type':'application/json'}
    //     const body = JSON.stringify(ticket);
    //     return this.http.post(this.ticketUrl,body,{'headers':headers});
    // }

    private handleError(err: HttpErrorResponse){
        return throwError("Algo salio mal");
    }
}
