import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Location } from "../Models/Location";

@Injectable({
    providedIn: 'root'
})

export class locationService {
    constructor(private http: HttpClient) { }
    private URL: string = 'api/locations.json';

    GetLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(this.URL);
    }
}
