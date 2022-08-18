import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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

