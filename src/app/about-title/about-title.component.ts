import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-title',
  templateUrl: './about-title.component.html',
  styleUrls: ['./about-title.component.scss']
})
export class AboutTitleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAboutTitleClick() {
    this.router.navigate(['../about']);
  }

}
