import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public newLogin!: string;
  public newPassword!: string;
  public newEmail!: string;
  public emptyData = true;
  public newUser = {login: '', password: '', email: ''};
  public userData = [this.newUser];
  public editStatus = false;
  public editIndex!: number;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    if (this.emptyData){
      this.userData = [];
      this.emptyData = false;
    }
    this.newUser = {
      login: this.newLogin,
      password: this.newPassword,
      email: this.newEmail
    };
    this.userData.push(this.newUser);
    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
  }

  deleteUser(index: number): void {
    this.userData.splice(index, 1);
  }

  editUser (index: number): void {
    this.newLogin = this.userData[index].login;
    this.newPassword = this.userData[index].password;
    this.newEmail = this.userData[index].email;
    this.editIndex = index;
    this.editStatus = true;
  }

  saveEdit(): void {
    this.userData[this.editIndex].login = this.newLogin;
    this.userData[this.editIndex].password = this.newPassword;
    this.userData[this.editIndex].email = this.newEmail;
    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
    this.editStatus = false;
  }
}
