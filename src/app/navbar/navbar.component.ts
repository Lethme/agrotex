import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { links, LinkType } from './../app-routing.module';

export interface Link {
  route: string,
  text: string | undefined,
  active: boolean
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  active: number = 0;
  @Output() activeChange = new EventEmitter<number>();

  get htmlLinks(): Array<Link> {
    return links.filter(link => {
      return link.type !== LinkType.RouterLink;
    }).map((link, index) => {
      return { route: link.route, text: link.text, active: this.active === index }
    });
  }

  constructor(private router: Router) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.active = this.htmlLinks.findIndex(link => {
            return link.route === this.router.url.replace('/', '');
          });
          this.activeChange.emit(this.active);
        }
      }
    );
  }

  get activeLink(): number { return this.active }
  set activeLink(num: number) {
    if (this.active >= 0 && this.active < this.htmlLinks.length) {
      this.active = num;
      this.activeChange.emit(this.active);
    }
  }

  ngOnInit(): void { }
}
