import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuElement } from '../../models/menu-element-interface';

@Component({
  selector: 'gta-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'profile', viewValue: 'Profile', icon:'person'},
    {value: 'history', viewValue: 'History', icon:'history'},
    {value: 'add-workout', viewValue: 'Add Workout', icon:'add'},
    {value: 'exercises', viewValue: 'Exercises', icon:'fitness_center'},
    {value: 'upgrade', viewValue: 'Upgrade', icon:'auto_awesome'},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(menuElement: MenuElement){
    this.router.navigate(["/" + menuElement.value]);
  }

}
