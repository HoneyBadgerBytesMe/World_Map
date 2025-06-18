import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService, CountryApi } from '../services/country.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  country = {
    name: '',
    region: '',
    incomeLevel: '',
    capitalCity: '',
    longitude: '',
    latitude: ''
  };

   private lastTarget: SVGElement | null = null;

  constructor(private countryService: CountryService) {}

  onCountryClick(code: string, name: string, event: MouseEvent): void {
    const target = event.target as SVGElement;
    if (!code) return;


    if (this.lastTarget) {
      this.lastTarget.classList.remove('active-country');
    }
    target.classList.add('active-country');
    this.lastTarget = target;


    this.countryService.getCountry(code)
      .subscribe((data: CountryApi) => {
        this.country = {
          name: data.name,
          capitalCity: data.capitalCity,
          region: data.region.value,
          incomeLevel: data.incomeLevel.value,
          longitude: data.longitude,
          latitude: data.latitude
        };
      });
  }
}