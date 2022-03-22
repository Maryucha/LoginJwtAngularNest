import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/services/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public userList: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listAllUsers().subscribe((x) =>{
      this.userList = x
    });
  }

}
