import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-page',
  templateUrl: './reference-page.component.html',
  styleUrls: ['./reference-page.component.scss']
})
export class ReferencePageComponent implements OnInit {
  scroll(div: HTMLElement) {
    div.scrollIntoView({behavior:"smooth"});
  }
  constructor() { }

  ngOnInit() {
  }

}
