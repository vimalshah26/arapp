import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { stringify } from 'querystring';
import { Observable } from 'rxjs';




@Injectable({
    providedIn: 'root'
})
export class ContactService {


    configUrl = 'http://localhost:3000/api/contacts'

    constructor(private http: HttpClient){

    }

    dataChangeObservable = new Observable((observer) => {});


    getContacts() {
       return this.http.get(this.configUrl);
    }

    getContact(id){
        return this.http.get(this.configUrl + '/' + id);
    }

    createContact(request){

        return this.http.post(this.configUrl, request);
    }

    updateContact(id, request){
        return this.http.put(this.configUrl + '/' + id, request);
    }

    deleteContact(request) {
        return this.http.delete(this.configUrl, { params: request._id});
    }
    
    delete(request){
        return this.http.request('delete', this.configUrl + '/' + request._id,  { body: request});
    }
    

}