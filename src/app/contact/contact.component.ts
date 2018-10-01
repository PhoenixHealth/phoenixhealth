import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router) {}

  onCallClick() {
    location.href = 'tel:+1 876-972-1933';
  }

  onMailClick() {
    location.href = 'mailto:xyz@abc.com';
    // window.open('mailto:info@phoenixmedicalcenter.com');
  }

  onPositionClick() {
    this.router.navigate(['../contact']);
  }

}
