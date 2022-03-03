import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData = [
    {
      id: '001',
      name: 'Santosh Kalathoki',
      address: 'Kathmandu',
      age: 21
    },
    {
      id: '002',
      name: 'Hemraj Kalathoki',
      address: 'Dang',
      age: 22
    },
    {
      id: '003',
      name: 'Sharad Khanal',
      address: 'Pyuthan',
      age: 23
    },
    {
      id: '004',
      name: 'Anita Khadka',
      address: 'Kapan',
      age: 20
    }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onDetailView(id: string, paramName: string, address: string, age: number) {
    this.router.navigate(['/home/detail-view', id], {
      queryParams: {name: paramName, address: address, age: age}
    });
  }

}
