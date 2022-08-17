import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
import { User } from './user.model';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
})

export class UserTableComponent implements OnInit, OnDestroy {
  
  errorMessage = '';
  sub!: Subscription;
  userData: User[] = [];
  displayedColumns: string[] = ['action', 'user', 'date', 'authorize'];
  dataSource = this.userService.getUser();


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.sub = this.userService.getUser().subscribe({
      next: (userData) => (this.userData = userData),
      error: (err) => (this.errorMessage = err),
    });
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    throw new Error('Method not implemented.');
  }

  
}

// export class UserDataSource extends DataSource<any> {
//   constructor(private userService: UserService) {
//     super();
//   }

//   connect(): Observable<User[]> {
//     return this.userService.getUser();
//   }

//   disconnect() {}
// }
