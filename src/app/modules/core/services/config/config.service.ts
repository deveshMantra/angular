import { Injectable } from '@angular/core';
import * as urlConfig from './url.config.json'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
    /**
     * Property containing url config
     */
     urlConfig: any = urlConfig;
}
