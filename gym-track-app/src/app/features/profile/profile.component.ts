import { Component, OnInit } from '@angular/core';
import { MenuElement } from 'src/app/core/models/menu-element-interface';

@Component({
  selector: 'gta-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'measurements', icon:'straighten'},
    {value: 'settings', icon:'settings'}
  ];
  title: string = 'Profile';

  constructor() { }

  ngOnInit(): void {
  }

}
