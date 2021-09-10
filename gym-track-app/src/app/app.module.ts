import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ExercisesModule } from './features/exercises/exercises.module';
import { UpgradeModule } from './features/upgrade/upgrade.module';
import { AddWorkoutModule } from './features/add-workout/add-workout.module';
import { ProfileModule } from './features/profile/profile.module';
import { HistoryModule } from './features/history/history.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    SharedModule,
    AddWorkoutModule,
    ProfileModule,
    HistoryModule,
    ExercisesModule,
    UpgradeModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/app'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
