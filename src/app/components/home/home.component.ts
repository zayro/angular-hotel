import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { HttpData } from '../../../services/http-data.service';

import { Icon } from '../../class/icon';

import * as $ from 'jquery';

// interface
export interface LoadData {
  data: string;
  status: boolean;
}

export interface Category {
  icon: string;
  id: string;
  num: number;
  check: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Icon implements OnInit {


  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private api: HttpData,
    breakpointObserver: BreakpointObserver
  ) {
    super(iconRegistry, sanitizer);

    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          console.log(result);
        }
      });

    const layoutChanges = breakpointObserver.observe('(max-width: 999px)');

    layoutChanges.subscribe(result => {
      if (result.matches) {
        this.mobile = true;
        this.show = false;
      } else {
        this.mobile = false;
        this.show = true;
      }

    });
  }

  search: string;

  dataSource: any;

  panelOpenState: boolean;

  MultFilter = {};

  Valcheck: any = [];

  category: Category[] = [
    { icon: 'star', id: 'cinco', num: 5, check: false },
    { icon: 'star', id: 'cuatro', num: 4, check: false },
    { icon: 'star', id: 'tres', num: 3, check: false },
    { icon: 'star', id: 'dos', num: 2, check: false },
    { icon: 'star', id: 'uno', num: 1, check: false }
  ];

  public show = true;

  public mobile = false;

  public IconMenu = 'arrow_drop_down';

  getData() {
    // try some HTTP request:
    this.api.get('/hoteles?_limit=20').subscribe(
      response => {
        this.dataSource = response;
      },
      err => {
        console.error('Error occured.', err);
      }
    );
  }

  generated_start(number) {
    const Response = Array.from(new Array(number));
    return Response;
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

  multiFilter = (arr: Object[], filters: Object) => {
    const filterKeys = Object.keys(filters);
    return arr.filter(eachObj => {
      return filterKeys.every(eachKey => {
        if (!filters[eachKey].length) {
          return true; // passing an empty filter means that filter is ignored.
        }
        return filters[eachKey].includes(eachObj[eachKey]);
      });
    });
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

  ngOnInit() {
    this.panelOpenState = false;
    this.getData();
  }
}
