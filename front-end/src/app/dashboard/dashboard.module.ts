import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
// import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [ThemeModule,
            DashboardRoutingModule,
            FormsModule],
  declarations: [DashboardComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
