import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { HereComponent } from './here.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: HereComponent }])],
  declarations: [HereComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HereModule {}
