import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-admincontent',
    templateUrl: './admincontent.component.html',
})
export class AdminContent implements OnInit{
    content: string;
    constructor(private userService: UserService) { }
    ngOnInit(): void {
        this.userService.getByAdminRole().subscribe(
            data => {
                this.content = data;
            },
            error => {
                this.content = error;
            }
        );
    }
}