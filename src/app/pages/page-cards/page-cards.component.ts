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
    const url = "http://localhost:8080/countries/cards";
    this.http.get(url).subscribe((res) => {
      this.countries = res;
    });
  }

}
