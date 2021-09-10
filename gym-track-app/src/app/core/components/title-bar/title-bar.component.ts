import { Component, OnInit } from '@angular/core';

interface MenuElement {
  value: string;
  viewValue: string;
  icon: string;
  isVisible: boolean;
}

@Component({
  selector: 'gta-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'measurements', viewValue: 'Measurements', icon:'straighten', isVisible: true},
    {value: 'settings', viewValue: 'Settings', icon:'settings', isVisible: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
