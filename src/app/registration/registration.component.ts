import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  registrationUser(data){
    this.userService.registrationUser(data);
  }
}
 