import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cards',
  templateUrl: './page-cards.component.html',
  styleUrls: ['./page-cards.component.css']
})
export class PageCardsComponent implements OnInit {
  public countries!: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    const url = "https://restcountries.com/v3.1/region/europe?fields=name,capital,flags,maps,cca2";
    this.http.get(url).subscribe((res) => {
      this.countries = res;
    });
  }

}
