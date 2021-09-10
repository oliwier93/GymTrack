import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';



@NgModule({
  declarations: [
    ExercisesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExercisesComponent
  ]
})
export class ExercisesModule { }
