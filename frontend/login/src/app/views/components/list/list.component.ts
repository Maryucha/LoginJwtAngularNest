import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListItens } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public userList: UserListItens[] = [];

  constructor(private userService: UserService, private router: Router) { }

 async ngOnInit(): Promise<void> {
   await this.userService.listAllUsers().subscribe((x) =>{
      this.userList = x
    });
  }

  remove(id:string) {
    this.userService.removeUser(id).subscribe((x) =>{});
  }



}
