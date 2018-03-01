import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ToysService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number, sellername: String) {
    return this.httpClient.post(environment.apiUrl + 'Product/createProduct', {'name':name, 'price':price , 'sellername':sellername});
  }

  getProducts(){
    return this.httpClient.get(environment.apiUrl + 'Product/getProducts');
  }

  updateProduct(name:string, price:number) {
    return this.httpClient.patch(environment.apiUrl + 'Product/updateProduct/:ProductId', {'name':name,'price':price});
  }

}
