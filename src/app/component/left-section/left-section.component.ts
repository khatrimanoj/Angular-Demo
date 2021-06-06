import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

  currentRouter:any='';
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      this.currentRouter = this.router.url; // Current page route
   });
  }
  

  ngOnInit(): void {
  
  }

}
