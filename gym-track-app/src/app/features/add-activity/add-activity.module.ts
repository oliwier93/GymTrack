import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddActivityComponent } from './add-activity.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddActivityComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    AddActivityComponent
  ]
})
export class AddActivityModule { }
