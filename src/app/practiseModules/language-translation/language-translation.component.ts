import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {I18nService} from '../../i18n/i18n.service'

@Component({
  selector: 'app-language-translation',
  templateUrl: './language-translation.component.html',
  styleUrls: ['./language-translation.component.css']
})
export class LanguageTranslationComponent implements OnInit {
  switchLanguage: string = 'en';
  browserLanguage;

  constructor( private langService : I18nService,
               public translate: TranslateService) {
    this.langService.selectedLanguage.subscribe((res)=>{
      this.switchLanguage = res;
      console.log(this.switchLanguage);
      translate.use( this.switchLanguage);

    })
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserLanguage = translate.getDefaultLang();
    this.languageChanged();
    this.langService.selectedLanguage.next(this.browserLanguage);
   }
   languageChanged(){
     this.translate.use(this.browserLanguage.match(/fr|en/)? this.browserLanguage: 'en');
   }

  ngOnInit(): void {
  }
  selectedLanguage(language){
    console.log('Selected language:', language);
    // this.switchLanguage = language;
    this.langService.selectedLanguage.next(language);

  }

}
