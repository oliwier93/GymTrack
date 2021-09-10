import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ExercisesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ExercisesComponent
  ]
})
export class ExercisesModule { }
