import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { TableService } from './table.service';
import { ITableData } from './tabledata';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnDestroy {

  errorMessage = '';
  sub!: Subscription;

  tableData: ITableData[] = [];

  displayedColumns: string[] = ['action', 'user', 'date', 'authorized'];
  dataSource = this.tableService.getData()
  // dataSource = new MatTableDataSource<ITableData>(ELEMENT_DATA)

  constructor(private tableService: TableService) { }

  ngOnInit(): void {

    this.sub = this.tableService.getData().subscribe({
      next: tableData => this.tableData = tableData,
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

}

// const ELEMENT_DATA: ITableData[] = [
//   {
//     "action": "Login",
//     "user": "hydrogen@gmail.com",
//     "date": "May 21, 2020",
//     "authorize": false
//   },
//   {
//     "action": "Play Video",
//     "user": "oxygen@gmail.com",
//     "date": "September 1, 2019",
//     "authorize": true
//   },
//   {
//     "action": "Get History",
//     "user": "ferrum@gmail.com",
//     "date": "January 03, 2018",
//     "authorize": true
//   }
// ]