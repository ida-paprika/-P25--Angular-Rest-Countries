import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {

  @Input() country!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
