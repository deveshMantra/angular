import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor() { }
  selectedLanguage = new BehaviorSubject('en');

}
