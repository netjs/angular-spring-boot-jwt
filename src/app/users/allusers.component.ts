import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
    selector: 'app-allusers',
    templateUrl: './allusers.component.html',
})
export class AllUsersComponent implements OnInit{
    content: string;
    constructor(private userService: UserService) { }
    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(
            data => {
              this.content = data;
            },
            error => {
              this.content = error;
            }
        );
    }
}