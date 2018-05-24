import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



import { Icon } from '../../class/icon';
import { Funtions } from '../../class/funciones';

import * as $ from 'jquery';


export interface Category {
  icon: string;
  id: string;
  num: number;
  check: boolean;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends Icon implements OnInit {

  public show = true;

  public mobile = false;

  funciones = new Funtions();

  search: string;

  IconMenu: string;

  panelOpenState: boolean;

  MultFilter = {};

  Valcheck: any = [];

  @Output() messageEvent = new EventEmitter<any>();

  SendSearch() {
    this.messageEvent.emit(this.search);
  }

  SendMultFilter() {
    this.messageEvent.emit(this.MultFilter);
  }

    constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    breakpointObserver: BreakpointObserver
  ) {
    super(iconRegistry, sanitizer);
  }


  category: Category[] = [
    { icon: 'star', id: 'cinco', num: 5, check: false },
    { icon: 'star', id: 'cuatro', num: 4, check: false },
    { icon: 'star', id: 'tres', num: 3, check: false },
    { icon: 'star', id: 'dos', num: 2, check: false },
    { icon: 'star', id: 'uno', num: 1, check: false }
  ];


  ngOnInit() {
    this.panelOpenState = false;
  }

  FieldsChange(values: any) {
    if (values.currentTarget.value === 'all') {
      $('input[name=\'item[]\']').prop('checked', false);
      $('#all').prop('checked', true);
      this.MultFilter = {
        stars: []
      };
      this.Valcheck = [];

      return true;
    }

    if (values.currentTarget.checked) {
      $('#all').prop('checked', false);
      this.Valcheck.push(Number(values.currentTarget.value));
    } else {
      const index = this.Valcheck.indexOf(Number(values.currentTarget.value));
      if (index > -1) {
        this.Valcheck.splice(index, 1);
      }
    }

    // const response =  this.FindArray(this.Valcheck);

    this.MultFilter = {
      stars: this.Valcheck
    };

    // this.dataSource = this.multiFilter(this.dataSource, filters);
  }



  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.IconMenu = 'arrow_drop_up';
    } else {
      this.IconMenu = 'arrow_drop_down';
    }
  }

}
