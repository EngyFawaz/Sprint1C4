import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ToysService {

  constructor(private httpClient: HttpClient) { }

  createC4(name:string, price:number, component:String , seller: String) {
    return this.httpClient.post(environment.apiUrl + 'C4/createC4', {'name':name, 'price':price ,'component': component, 'seller':seller});
  }

  getC4(){
    return this.httpClient.get(environment.apiUrl + 'C4/getC4');
  }

  updateC4(id:object, name:string, price:number) {
    return this.httpClient.patch(environment.apiUrl + 'C4/updateC4/'+id,{'name':name, 'price':price});
  }

  deleteC4(id:object){
    return this.httpClient.delete(environment.apiUrl+ 'C4/deleteC4/'+id);
  }

}
