import {NgModule} from '@angular/core';
import {StaffCommonModule} from '@eg/staff/common.module';
import {AdminAcqRoutingModule} from './routing.module';
import {AdminCommonModule} from '@eg/staff/admin/common.module';
import {AdminAcqSplashComponent} from './admin-acq-splash.component';
import {ClaimingAdminComponent} from './claiming-admin.component';

@NgModule({
  declarations: [
      AdminAcqSplashComponent,
      ClaimingAdminComponent
  ],
  imports: [
    AdminCommonModule,
    AdminAcqRoutingModule
  ],
  exports: [
  ],
  providers: [
  ]
})

export class AdminAcqModule {
}


