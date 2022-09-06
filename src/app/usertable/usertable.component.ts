import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
import { IUser } from './user.model';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
})

export class UserTableComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  userData: IUser[] = [];
  displayedColumns: string[] = ['action', 'user', 'date', 'authorize'];
  dataSource = this.userService.getUser();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.sub = this.userService.getUser().subscribe({
      next: (userData) => (this.userData = userData),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}