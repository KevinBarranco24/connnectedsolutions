import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@injectable({
    provideIn: 'root'
})
export clss TicketService {
    private readonly ticketsUrl = 'api/tickets/tickets.json';

    constructor(private: http: HttpClient) { }

    getTickets(): Observavle<ITicket[]> {
        return this.http.get<ITicket[]>(this.ticketsUrls);
    }
}