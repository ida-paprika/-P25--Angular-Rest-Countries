import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-geolocation',
  templateUrl: './page-geolocation.component.html',
  styleUrls: ['./page-geolocation.component.css']
})
export class PageGeolocationComponent implements OnInit {
  public selectForm: FormGroup;
  public countriesList!: any;
  public zoom = 10;
  public center!: google.maps.LatLngLiteral;
  public options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {
    this.selectForm = this.formBuilder.group({
      selectCountry: ['FR']
    });
  }

  ngOnInit(): void {
    this.getCountries();
    this.displayMap('fr');
  }

  private getCountries(): void {
    const url = "https://restcountries.com/v3.1/region/europe?fields=name,cca2";
    this.http.get(url).subscribe((res) => {
      this.countriesList = res;
    });
  }

  onChange(event: any): void {
    this.displayMap(event.target.value);
  }

  private displayMap(cca2: string): void {
    const url = "https://restcountries.com/v3.1/alpha/" + cca2 + "?fields=capitalInfo";
    this.http.get(url).subscribe((res: any) => {
      this.center = {
        lat: res.capitalInfo.latlng[0],
        lng: res.capitalInfo.latlng[1],
      }
    });
  }

}
