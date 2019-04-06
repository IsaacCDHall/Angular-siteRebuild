import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  providers: [AuthenticationService]
})
export class LogInComponent implements OnInit {

  ngOnInit() {
  }
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
        console.log("Ya signed out")
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        console.log(`${this.userName} is signed in`);
        console.log(user);
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
// below is the updated with router

// import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from '../authentication.service';
// import { Routes, RouterModule } from '@angular/router';
//
// @Component({
//   selector: 'app-log-in',
//   templateUrl: './log-in.component.html',
//   styleUrls: ['./log-in.component.scss'],
//   providers: [AuthenticationService]
// })
// export class LogInComponent implements OnInit {
//
//   ngOnInit() {
//   }
//   user;
//   private isLoggedIn: Boolean;
//   private userName: String;
//
//   constructor(public authService: AuthenticationService) {
//     this.authService.user.subscribe(user =>  {
//       if (user == null) {
//         this.isLoggedIn = false;
//         this.router.navigate(['login']);
//       } else {
//         this.isLoggedIn = true;
//         this.userName = user.displayName;
//         console.log(this.userName);
//       }
//       console.log(user)
//     });
//   }
//
//   login() {
//     this.authService.login();
//   }
//
//   logout() {
//     this.authService.logout();
//   }
// }
