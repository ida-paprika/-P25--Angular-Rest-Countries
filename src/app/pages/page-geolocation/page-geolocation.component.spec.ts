import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGeolocationComponent } from './page-geolocation.component';

describe('PageGeolocationComponent', () => {
  let component: PageGeolocationComponent;
  let fixture: ComponentFixture<PageGeolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGeolocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
