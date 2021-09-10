import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HistoryComponent } from './history.component';



@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistoryComponent
  ],
  providers: [
  ]
})
export class HistoryModule { }
