import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWorkoutComponent } from './add-workout.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddWorkoutComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    AddWorkoutComponent
  ]
})
export class AddActivityModule { }
