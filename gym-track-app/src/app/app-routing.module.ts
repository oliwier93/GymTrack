import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkoutComponent } from './features/add-workout/add-workout.component';
import { ExercisesComponent } from './features/exercises/exercises.component';
import { HistoryComponent } from './features/history/history.component';
import { ProfileComponent } from './features/profile/profile.component';
import { UpgradeComponent } from './features/upgrade/upgrade.component';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'add-workout', component: AddWorkoutComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'upgrade', component: UpgradeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
