import { Component, OnInit } from '@angular/core';
import { MenuElement } from 'src/app/core/models/menu-element-interface';

@Component({
  selector: 'gta-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'measurements', icon:'straighten'},
    {value: 'settings', icon:'settings'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}