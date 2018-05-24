import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { HttpData } from '../../../services/http-data.service';

import { Icon } from '../../class/icon';

import { Funtions } from '../../class/funciones';

// interface
export interface LoadData {
  data: string;
  status: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends Icon implements OnInit {

  @Input() search: string;
  @Input() MultFilter: any;
  @Input() show: boolean;
  @Input() mobile: boolean;

  dataSource: any;

  funciones = new Funtions();

  public IconMenu = 'arrow_drop_down';

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


  getData() {
    // try some HTTP request:
    this.api.get('/admin/getAll/hoteles').subscribe(
      (response: LoadData) => {
        this.dataSource = response.data;
      },
      err => {
        console.error('Error occured.', err);
      }
    );
  }


  ngOnInit() {
    this.getData();
  }



}
