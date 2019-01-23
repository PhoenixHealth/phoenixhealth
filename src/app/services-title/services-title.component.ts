import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-title',
  templateUrl: './services-title.component.html',
  styleUrls: ['./services-title.component.scss']
})
export class ServicesTitleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onServicesTitleClick() {
    this.router.navigate(['../services']);
  }

}
