import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CountryApi {
  id: string;
  iso2Code: string;
  name: string;
  region: { id: string; iso2code: string; value: string };
  incomeLevel: { id: string; iso2code: string; value: string };
  capitalCity: string;
  longitude: string;
  latitude: string;
}

@Injectable({ providedIn: 'root' })
export class CountryService {
  private baseUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  getCountry(code: string): Observable<CountryApi> {
    return this.http
      .get<any[]>(`${this.baseUrl}/${code}?format=json`)
      .pipe(
        map(response => {
          const countryObj = response[1]?.[0];
          return countryObj as CountryApi;
        })
      );
  }
}