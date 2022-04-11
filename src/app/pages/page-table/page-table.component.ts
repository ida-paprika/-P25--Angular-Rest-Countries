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

  private getData() {
    const url = "http://localhost:8080/countries/table";
    this.http.get(url).subscribe((res) => {
      this.countries = res;
    });
  }


}
