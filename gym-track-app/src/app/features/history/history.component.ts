import { Component, OnInit } from '@angular/core';
import { MenuElement } from 'src/app/core/models/menu-element-interface';

@Component({
  selector: 'gta-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'calendar', icon:'date_range'}
  ];
  title: string = 'History';

  constructor() { }

  ngOnInit(): void {
  }

}
