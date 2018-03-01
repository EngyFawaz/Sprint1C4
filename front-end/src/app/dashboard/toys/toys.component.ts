import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToysService } from './toys.service'
@Component({
  selector: 'app-toys',
  template: '<ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)" ></ng2-smart-table>',
  providers: [ToysService]
})
// <ng2-smart-table [settings]="settings"></ng2-smart-table>
export class ToysComponent implements OnInit {
  settings = {
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      name: {
        title: 'Product Name'
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created At'
      }
    }
  };

  data = [];
  constructor(private toysService:ToysService){

  }
  onCreateCall(event){
       event.confirm.resolve(event.newData);
       this.toysService.createProduct(event.newData.name, event.newData.price).subscribe();
  }
  onEditCall(event){
       event.confirm.resolve(event.newData);
       this.toysService.updateProduct(event.newData.name, event.newData.price).subscribe();
  }
  ngOnInit() {
    this.toysService.getProducts().subscribe(
      (res: Response) => {
        console.log(res.data)
        this.data = res.data;
      }
    );
   }

}
