import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-geolocation',
  templateUrl: './page-geolocation.component.html',
  styleUrls: ['./page-geolocation.component.css']
})
export class PageGeolocationComponent implements OnInit {

  public isocode!: any;
  public selectForm: FormGroup;
  public countriesList!: any;
  public zoom = 10;
  public center!: google.maps.LatLngLiteral;
  public options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private _Activatedroute: ActivatedRoute
  ) {
    this.selectForm = this.formBuilder.group({
      selectCountry: ['FR']
    });
  }

  ngOnInit(): void {
    if (this._Activatedroute.snapshot.paramMap.get('isocode')) {
      this.isocode = this._Activatedroute.snapshot.paramMap.get('isocode');
    }
    else {
      this.isocode = 'FR';
    }

    // this._Activatedroute.paramMap.subscribe(params => {
    //   this.isocode = params.get('isocode');
    // });

    this.getCountries();
    console.log(this.isocode);
    this.displayMap(this.isocode);
  }

  private getCountries(): void {
    const url = "http://localhost:8080/countries/select";
    this.http.get(url).subscribe((res) => {
      this.countriesList = res;
    });
  }

  onChange(event: any): void {
    this.displayMap(event.target.value);
  }

  private displayMap(cca2: string): void {
    const url = "http://localhost:8080/countries/" + cca2 + "/map";
    this.http.get(url).subscribe((res: any) => {
      console.log(res[0].capitalLat);
      this.center = {
        lat: res[0].capitalLat,
        lng: res[0].capitalLng,
      }
    });
  }

}
