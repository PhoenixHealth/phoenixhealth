import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-title',
  templateUrl: './doctors-title.component.html',
  styleUrls: ['./doctors-title.component.scss']
})
export class DoctorsTitleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDoctorsTitleClick() {
    this.router.navigate(['../doctors']);
  }

}
