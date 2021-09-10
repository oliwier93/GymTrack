import { Component, OnInit } from '@angular/core';
import { MenuElement } from 'src/app/core/models/menu-element-interface';

@Component({
  selector: 'gta-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
  menuElements: MenuElement[] = [
    {value: 'redeem', icon:'redeem'}
  ];
  title: string = 'History';

  constructor() { }

  ngOnInit(): void {
  }

}
