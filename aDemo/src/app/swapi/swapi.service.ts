import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
//rx = reactive - library full of observables and observable methods
import "rxjs";

@Injectable()
export class SwapiService {

  constructor(private http: HttpClient) { }

  get_character(char_id: number)
  {
    //.toPromise turns the preceding observable into a promise
    return this.http.get('https://swapi.co/api/people/' + char_id).toPromise();
    //the below code will get the info from local server
    //return this.http.get('/api/people/' + char_id).toPromise();
  }

}
