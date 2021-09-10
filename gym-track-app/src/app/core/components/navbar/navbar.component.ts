import { Component, OnInit } from '@angular/core';

interface MenuElement {
  value: string;
  viewValue: string;
  icon: string;
}

@Component({
  selector: 'gta-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'profile', viewValue: 'Profile', icon:'person'},
    {value: 'history', viewValue: 'History', icon:'history'},
    {value: 'add-workout', viewValue: 'Add Workout', icon:'add'},
    {value: 'exercises', viewValue: 'Exercises', icon:'fitness_center'},
    {value: 'upgrade', viewValue: 'Upgrade', icon:'auto_awesome'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
