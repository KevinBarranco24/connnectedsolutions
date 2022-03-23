import { HttpClient, } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, } from "rxjs";
import { Ticket } from "../Models/Ticket";

@Injectable({
    providedIn: 'root'
})

export class TicketService {
    constructor(private http: HttpClient) { }
    private URL: string = 'api/tickets.json';

    GetTickets(): Observable<Ticket[]>{
        return this.http.get<Ticket[]>(this.URL);
    }
}
