import { Component } from '@angular/core';
import { Sidebar } from '../Model/sidebar';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: []
})
export class SidebarComponent {
  Menu:Sidebar[]=[
    {
      text:'Dashboard',
      icon:'pi pi-home',
      link:'/dashboard',
      isActive:true
    },
    {
      text:'Orders',
      icon:'pi pi-home',
      link:'/users',
      isActive:true
    },
      {
      text:'Users',
      icon:'pi pi-users',
      link:'/users',
      isActive:true
    },
      {
      text:'Items',
      icon:'pi pi-home',
      link:'/dashboard',
      isActive:true
    },
      {
      text:'Transactions',
      icon:'pi pi-home',
      link:'/dashboard',
      isActive:true
    },
      {
      text:'Reports',
      icon:'pi pi-home',
      link:'/dashboard',
      isActive:true
    },
  ]
}
