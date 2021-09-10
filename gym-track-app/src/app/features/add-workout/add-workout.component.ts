import { Component, OnInit } from '@angular/core';
import { MenuElement } from 'src/app/core/models/menu-element-interface';

@Component({
  selector: 'gta-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss']
})
export class AddWorkoutComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'add', icon:'add'}
  ];
  title: string = 'Workout';


  constructor() { }

  ngOnInit(): void {
  }

}
