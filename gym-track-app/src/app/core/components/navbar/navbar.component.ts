import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MenuElement {
  value: string;
  viewValue: string;
  icon: string;
  isVisible: boolean;
}

@Component({
  selector: 'gta-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'profile', viewValue: 'Profile', icon:'person', isVisible: true},
    {value: 'history', viewValue: 'History', icon:'history', isVisible: true},
    {value: 'add-workout', viewValue: 'Add Workout', icon:'add', isVisible: true},
    {value: 'exercises', viewValue: 'Exercises', icon:'fitness_center', isVisible: true},
    {value: 'upgrade', viewValue: 'Upgrade', icon:'auto_awesome', isVisible: true},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(menuElement: MenuElement){
    this.router.navigate(["/" + menuElement.value]);
  }

}
