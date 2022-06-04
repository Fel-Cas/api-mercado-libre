import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl='https://api.mercadolibre.com'
  }

  searchItem(name:string): Promise<any>{
    return firstValueFrom(this.httpClient.get(`${this.baseUrl}/sites/MCO/search?q=${name}`));
  }

  detailItem(id:string): Promise<any>{
    return firstValueFrom(this.httpClient.get(`${this.baseUrl}/items/${id}`))
  }
}
