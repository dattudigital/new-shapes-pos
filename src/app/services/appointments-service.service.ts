import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import {Event} from '../model/event.model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {ExtractData, HandleError} from "./service-helper.service";
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AppointmentsServiceService {

  private eventUrl = "http://ec2-54-88-194-105.compute-1.amazonaws.com:3001/apptest2";

  constructor(private http:HttpClient) { }

    get(id1:number,id2:number) {
      return this.http.get("http://ec2-54-88-194-105.compute-1.amazonaws.com:3001/emp-branch-appt/"+id1+'/'+id2);
    }
   
    saveAppointment(data:any){
        return this.http.post(environment.host + 'orders', data);
      }
    }
  

