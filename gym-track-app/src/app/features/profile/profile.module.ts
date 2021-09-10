import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TitleBarComponent } from './components/title-bar/title-bar.component';



@NgModule({
  declarations: [
    ProfileComponent,
    TitleBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ProfileComponent
  ],
})
export class ProfileModule { }
