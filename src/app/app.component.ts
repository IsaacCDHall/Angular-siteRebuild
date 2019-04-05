import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'Hello Trello';
  // user;
  //
  // constructor(public authService: AuthenticationService) {
  //   this.authService.user.subscribe(user =>  {
  //     console.log(user);
  //   });
  // }
  //
  // login() {
  //   this.authService.login();
  // }
  //
  // logout() {
  //   this.authService.logout();
  // }
}
