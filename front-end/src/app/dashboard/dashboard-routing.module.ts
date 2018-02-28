import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ToysComponent } from './toys/toys.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
    {
      path: '',
      loadChildren : './about/about.module#AboutModule'
    },
    {
      path:'items',
      loadChildren : './items/items.module#ItemsModule'
    },
    {
      path: 'store',
      children: [
        {
          path: 'toystore',
          //component: ToysComponent
        },
        // {
        //   path: 'sportstore',
        //   component: SportComponent,
        // },
        // {
        //   path: 'foodstore',
        //   component: FoodComponent,
        // },
        // {
        //   path: 'fashionstore',
        //   component: FashionComponent,
        // },
        // {
        //   path: 'elecstore',
        //   component: ElectronicComponent,
        // },
      ],

    }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
