import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-usercontent',
    templateUrl: './usercontent.component.html',
})
export class UserContent implements OnInit{
    content: string;
    constructor(private userService: UserService) { }
    ngOnInit(): void {
        this.userService.getByUserRole().subscribe(
            data => {
                this.content = data;
            },
            error => {
                this.content = error;
            }
        );
    }
}