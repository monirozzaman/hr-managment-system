import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HrManagmentSystemSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HrManagmentSystemSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class HrManagmentSystemHomeModule {}
