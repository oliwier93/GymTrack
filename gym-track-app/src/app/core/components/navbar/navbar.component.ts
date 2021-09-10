import { Component, OnInit } from '@angular/core';

interface MenuElement {
  value: string;
  viewValue: string;
  icon: string;
  isVisible: boolean;
  routerLink: string;
}

@Component({
  selector: 'gta-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'profile', viewValue: 'Profile', icon:'person', isVisible: true, routerLink: "/profile"},
    {value: 'history', viewValue: 'History', icon:'history', isVisible: true, routerLink: "/history"},
    {value: 'add-workout', viewValue: 'Add Workout', icon:'add', isVisible: true, routerLink: "/add-workout"},
    {value: 'exercises', viewValue: 'Exercises', icon:'fitness_center', isVisible: true, routerLink: "/exercises"},
    {value: 'upgrade', viewValue: 'Upgrade', icon:'auto_awesome', isVisible: true, routerLink: "/upgrade"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
