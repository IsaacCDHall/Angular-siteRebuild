import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.getElementByID('contactForm').addEventListener('submit', submitForm);
  }
  // submitForm(e){
  //   e.preventDefault();
  //   console.log(123);
  // }
}
