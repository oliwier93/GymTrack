import { Component, Input, OnInit } from '@angular/core';
import { MenuElement } from 'src/app/core/models/menu-element-interface';

@Component({
  selector: 'gta-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  @Input() menuElements: MenuElement[] = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
