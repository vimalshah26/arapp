import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
}) 
export class AuthService {


    user: any;

    constructor() {

        this.user = {
            firstName: 'Vimal',
            lastName: 'Shah',
            role: 'Admin'
        };

    }



}