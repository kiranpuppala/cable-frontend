import { Injectable } from '@angular/core';
import { packs } from "../mock/mock-packs";
import { Pack } from "../types/pack";
import { Observable,of } from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class PackDetailService {

  getPacks() : Observable<Pack[]>{
    return of(packs);
  }

  constructor() { }
}
