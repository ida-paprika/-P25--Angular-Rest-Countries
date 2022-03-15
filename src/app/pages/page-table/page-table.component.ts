import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css']
})
export class PageTableComponent implements OnInit {
  public title = "HTML table presentation";
  public countries!: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const url = "https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population,cca2";
    this.http.get(url).subscribe( (res) => {
      this.countries = res;
      console.log(this.countries);
    })
  }

}
