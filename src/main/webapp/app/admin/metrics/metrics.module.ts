import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HrManagmentSystemSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [HrManagmentSystemSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
