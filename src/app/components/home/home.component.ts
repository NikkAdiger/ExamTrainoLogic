import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShow = [];

  contacts = [
    {
      id: 1,
      name: 'Friends',
      type: 'Group',
      contacts: [
        {id: 2, name: 'Udi', type: 'Contact'},
        {id: 3, name: 'Tommy', type: 'Contact'},
        {
          id: 6,
          name: 'Old Friends',
          type: 'Group',
          contacts: [
            {id: 7, name: 'Itay', type: 'Contact'},
          ]
        },
      ]
    },
    {
      id: 4,
      name: 'Family',
      type: 'Group',
      contacts: [
        {id: 5, name: 'Roni', type: 'Contact'},
      ]
    },
    {id: 8, name: 'Ori', type: 'Contact'},
  ];


  constructor() {
  }

  ngOnInit() {
  }

  showSubmenu(item: any, ind: number) {

    if (item.type === 'Group') {

      this.isShow[ind] = !this.isShow[ind];

    }
  }
}
