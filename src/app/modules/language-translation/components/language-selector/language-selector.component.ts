import { Component, Input, OnInit } from '@angular/core';
import {LanguageTranslationService} from '../../service/language-translation/language-translation.service'

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Input() inNavbar = false;
  @Input() menuClass = '';

  constructor(private languageTranslationService : LanguageTranslationService ) { }

  ngOnInit(): void {
  }
  setLanguage(language: string) {
    this.languageTranslationService.language = language;
  }

  get currentLanguage(): string {
    return this.languageTranslationService.language;
  }

  get languages(): string[] {
    return this.languageTranslationService.supportedLanguages;
  }
  /*
  *To toggle custom dropdown menu
  */
 toggleDropDown(){
  const selected =  document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  optionsContainer.classList.toggle("active")
  selected.classList.toggle("active")

 }
  /* const selected =  document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  const optionList = document.querySelector(".option");
  this.selected.addEventListener("click",() => {
      optionsContainer.classList.toggle("active");

  }) */

}
