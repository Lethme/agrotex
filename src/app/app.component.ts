import { Router } from '@angular/router';
import { StyleService } from './service/style/style.service';
import { Component, OnInit } from '@angular/core';
import { ScriptService } from './service/script/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'AgroTexGroup';

  constructor(private scriptService: ScriptService, private styleService: StyleService, private router: Router) { }
  ngOnInit(): void {
    this.styleService.loadAll().then(data => {
      console.log("styles loaded", data);
    }).catch(err => console.log(err));

    this.scriptService.loadAll().then(data => {
      console.log("scripts loaded", data);
    }).catch(err => console.log(err));
  }
}