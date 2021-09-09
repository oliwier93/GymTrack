import { Component, OnInit } from '@angular/core';

interface Category {
  value: string;
  viewValue: string;
}

interface BodyPart {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'gta-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  categories: Category[] = [
    {value: 'barbell', viewValue: 'Barbell'},
    {value: 'cardio', viewValue: 'Cardio'}
  ]

  bodyParts: BodyPart[] = [
    {value: 'core', viewValue: 'Core'},
    {value: 'cardio', viewValue: 'Cardio'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
