import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-title',
  templateUrl: './contact-title.component.html',
  styleUrls: ['./contact-title.component.scss']
})
export class ContactTitleComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router) {}

  onContactTitleClick() {
    this.router.navigate(['../contact']);
  }

  onCallClick() {
    location.href = 'tel:+1 876-972-1933';
  }

  onMailClick() {
    location.href = 'mailto:info@phoenixhealthcomplex.com';
    // window.open('mailto:info@phoenixmedicalcenter.com');
  }

  onPositionClick() {
    this.router.navigate(['../contact']);
  }

}
