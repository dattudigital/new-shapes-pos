import { Injectable } from '@angular/core';
import {Response} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceHelperService {

  constructor() { }
}
export function ExtractData(res: Response): any {
  let body = res.json();
  return body && body.data ? body.data: {};
}
export function HandleError(error: any): Promise<any>{
  console.log(error);
  return Promise.reject(error);
}