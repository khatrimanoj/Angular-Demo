import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TabName:any="home";
  JobTabName:any="savedjobs";
  constructor() { }

  ngOnInit(): void {
  }

  SelectTab(tab:any){
    this.TabName=tab;

    document.getElementById('home')?.classList.remove("active");
    document.getElementById('jobs')?.classList.remove("active");
    document.getElementById('invites')?.classList.remove("active");
    document.getElementById('Application')?.classList.remove("active");

    document.getElementById(tab)?.classList.add("active");
  }

  selectJobTab(name:any){
    this.JobTabName=name;
    document.getElementById(name)?.classList.add("active");
  }

}
