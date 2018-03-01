import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ItemsService } from './items.service'
@Component({
  selector: 'app-dashboard-items',
  template: `
            <p style="color:black"> Insert name of Product: </p>
            <input type="text" [(ngModel)]="ProductName"><br/>
            <br/>
            <p style="color:black" > Insert price of Product: </p>
            <input type="number" [(ngModel)]="ProductPrice"><br/>
            <br/>

            <button (click)="call()"> Add Product </button>
            `
})


export class ItemsComponent {
  ProductName : string = '';
  ProductPrice : number = 0;


  constructor(private itemsService:ItemsService){

  }

  call(){
     this.itemsService.createProduct(this.ProductName, this.ProductPrice).subscribe();
}
}

   //   this.itemsService.getProducts().subscribe(){
   //   res => {
   //     console.log(res.data);
   //   }
   // }
