import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {
  public countries: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // const url = "https://restcountries.com/v3.1/region/europe?fields=name";
    const url = "http://localhost:8080/countries";
    this.http.get(url).subscribe((res) => {
      this.countries = res;
    })
  }

}
