import { Component, OnInit } from '@angular/core';
import { LaunchprogramService } from '../launchprogram.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private lp:LaunchprogramService) { }

  launches = {};
  launchYear = 2006;
  successlaunch = true;
  successLand = true;
  ngOnInit(): void {
    this.lp.getAllLaunches().subscribe(result => {
      this.launches = result;
      console.log(result);
    })
  }
  getByYears(year){
    //alert(year);
    this.launchYear = year;
    this.lp.getAllByYears(year).subscribe(result => {
      this.launches = result;
      console.log(result);
    });
  }

  getBySuccessLaunch(val){
    this.successlaunch = val;
    this.lp.getBySuccessLaunch(val).subscribe(result => {
      this.launches = result;
      console.log(result);
    })
  }

  getBySuccessLanding(val){
    //alert(val);
    this.successLand = val;
    this.lp.getBySuccessLanding(this.successlaunch,this.successLand).subscribe(result => {
      this.launches = result;
      console.log(result);
    })
  }

}
