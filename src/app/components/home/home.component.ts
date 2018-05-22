import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'almundo',
        sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/logo-almundo.svg'));

        iconRegistry.addSvgIcon(
         'search',
        sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/filters/search.svg'));

      iconRegistry.addSvgIcon(
        'star',
        sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/filters/star.svg'));

  }

  category = [
    { icon:'star', id:'cinco', num:[1,2,3,4,5]},
    { icon:'star', id:'cuatro',  num:[1,2,3,4]},
    { icon:'star', id:'tres',  num:[1,2,3]},
    { icon:'star', id:'dos',  num:[1,2]},
    { icon:'star', id:'uno',   num:[1]},
  ];


  panelOpenState: boolean = false;

  ngOnInit() {
  }

}
