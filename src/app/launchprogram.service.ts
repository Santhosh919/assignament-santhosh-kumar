import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchprogramService {

  constructor(private http:HttpClient) { }

  getAllLaunches(){
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100`);
  }

  getAllByYears(year){
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=${year}`);
  }
  getBySuccessLaunch(successlaunch){
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${successlaunch}`);
  }

  getBySuccessLanding(successlaunch, successland){
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${successlaunch}&amp;land_success=${successland}`);
  }
}
