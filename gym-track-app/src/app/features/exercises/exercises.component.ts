import { Component, OnInit } from '@angular/core';
import { MenuElement } from 'src/app/core/models/menu-element-interface';

@Component({
  selector: 'gta-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'add', icon:'add'}
  ];
  title: string = 'Exercises';

  constructor() { }

  ngOnInit(): void {
  }

}
