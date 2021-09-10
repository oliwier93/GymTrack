import { Component, OnInit } from '@angular/core';

interface MenuElement {
  value: string;
  viewValue: string;
  icon: string;
  isVisible: boolean;
}

@Component({
  selector: 'gta-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'measurements', viewValue: 'Measurements', icon:'straighten', isVisible: true},
    {value: 'settings', viewValue: 'Settings', icon:'settings', isVisible: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
