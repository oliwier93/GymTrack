import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWorkoutComponent } from './add-workout.component';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddWorkoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddWorkoutComponent
  ]
})
export class AddWorkoutModule { }
