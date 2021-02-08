export class User{
    userName: string;
    email: string;
    password: string;
    roles: string[];
    constructor(userName: string, email: string, password: string, roles: string[]) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.roles  = roles;
    }
}