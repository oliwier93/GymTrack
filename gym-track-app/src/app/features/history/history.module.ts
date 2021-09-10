import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule { }
