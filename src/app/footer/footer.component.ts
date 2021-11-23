import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  email: string = "";
  constructor() { }

  ngOnInit(): void { }

  singUp() {
    console.log(this.email);
    return false;
  }
}
