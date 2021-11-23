import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from '../navbar/navbar.component';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.less']
})
export class NavLinkComponent implements OnInit {
  @Input() link: Link | undefined;
  constructor() { }
  ngOnInit(): void { }
}