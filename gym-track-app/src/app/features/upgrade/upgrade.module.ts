import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeComponent } from './upgrade.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UpgradeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UpgradeComponent
  ]
})
export class UpgradeModule { }
