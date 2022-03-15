import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css']
})
export class PageTableComponent implements OnInit {
  public countries!: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const FORMATER = new Intl.NumberFormat('en-US');
    const url = "https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population,cca2";
    this.http.get(url).subscribe( (res) => {
      this.countries = res;
      for (let country of this.countries) {
        country.area = FORMATER.format(country.area);
        country.population = FORMATER.format(country.population);
        country.capital = country.capital[country.capital.length-1];
      }
    });
  }


}
