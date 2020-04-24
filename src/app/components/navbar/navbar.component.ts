import { Component, OnInit } from '@angular/core';

import { INavItem } from 'src/app/models/INavItem';
import { NavbarService } from 'src/app/services/ui/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu: INavItem[];

  constructor(
    private navbarService: NavbarService
  ) { }

  clickMenu() { 
    this.navbarService.toggle();
  }

  ngOnInit(): void {
    this.menu = this.navbarService.getNavbarMenu();
  }

}
