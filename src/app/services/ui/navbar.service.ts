import { Injectable } from '@angular/core';
import { INavItem } from 'src/app/models/INavItem'

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public sideNavToggleSubject: Subject<any> = new Subject<any>();

  constructor() { }

  menu: INavItem[] = [
    {
      displayName: 'Home',
      iconName: 'fas fa-angle-right',
      route: '/home',
    },
    {
      displayName: 'About',
      iconName: 'fas fa-angle-right',
      route: '/about',
    },
    {
      displayName: 'Login',
      iconName: 'fas fa-angle-right',
      route: '/login',
    }        
  ];

  getNavbarMenu(): INavItem[] {
    return this.menu;
  }

  public toggle() {
    return this.sideNavToggleSubject.next();
  }   
}