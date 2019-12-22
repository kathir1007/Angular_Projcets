import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Headers } from '@angular/http';

@Injectable()
export class PostsService {

    private postUrl = "http://localhost:8080/getAllDetails";
    constructor(private http: Http) {
        console.log("Service initialized");
    }

    getAllDetails() {
        return this.http.get('http://localhost:8080/getAllDetails').
            map(res => res.json())
    }

    postDetails(idVal: any, nameVal: any) {
        const options = {
        
            id: parseInt(idVal),
            name: nameVal
        };


        return this.http.post("http://localhost:8080/addDetails", options).
            map(res => res.json());
    }

    getDetails(idParam: any) {
        alert(idParam != '')
        if (idParam != '') {
            return this.http.get('http://localhost:8080/getIdDetails?id=' + idParam).
                map(res => res.json())
        } else {
            return null;
        }
    }

    deleteDetails(idParam: any) {

        const options = {

            id: 1,
            name: 'nameVal'

        };
        alert(idParam)
        return this.http.delete("http://localhost:8080/deleteId?id=" + idParam, options).map(
            (ok) => { alert('Ok') });
    }

}
