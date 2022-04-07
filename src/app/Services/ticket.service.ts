import { Injectable } from "@angular/core";
import { Ticket } from "../models/Ticket";

@Injectable({
    providedIn: 'root'
})

export class TicketService {
    constructor(){}
    _tickets: Ticket[] = [
        {
            username: "Francisco Hernadez",
            location: "Edificio X",
            category: "Cosas perdidas",
            datetime: new Date(2022, 2, 10, 15, 24, 16),
            description: "Se me olvidó mi mochila dentro del salón."
        },
        {
            username: "Kevin Morales",
            location: "Edificio A",
            category: "Asistencia general",
            datetime: new Date(2022, 2, 24, 9, 10, 16),
            description: "Quiero sacar un libro."
        },
        {
            username: "César Alarcón",
            location: "Edificio X",
            category: "Cosas perdidas",
            datetime: new Date(2022, 2, 10, 15, 27, 46),
            description: "También se me olvidó la mochila en el salón."
        },
    ]
    
    GetTickets(): Ticket[]{
        return this._tickets;
    }

    AddTicket(T: Ticket){
        this._tickets.push(T);
    }
}
