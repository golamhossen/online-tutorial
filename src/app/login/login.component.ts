import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allData;
  currentUser;
  currentUserPassword;
  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  loginUser(data){
    this.currentUser = data.username;
    this.currentUserPassword = data.password;
    this.userService.loginUser(data).subscribe(
      (response) => {
        this.allData = response;
      }
    )
  }
}
