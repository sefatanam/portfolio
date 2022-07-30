import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Education } from '@interfaces/Education';
import { EmploymentHistory } from '@interfaces/EmploymentHistory';
import { Technology } from '@interfaces/Technology';
import { forkJoin, map, Observable, of } from 'rxjs';

interface InfoData {
  technologies: Technology[];
  educations: Education[];
  employmentHistories: EmploymentHistory[];
}
@Injectable({
  providedIn: 'root'
})
export class InfoResolver implements Resolve<InfoData> {
  constructor(private httpClient: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<InfoData> {
    const technologies = this.httpClient.get<Technology[]>('technologies.json');
    const educations = this.httpClient.get<Education[]>('educations.json');
    const employmentHistories = this.httpClient.get<EmploymentHistory[]>(
      'employmentHistory.json'
    );
    let response: InfoData = {
      educations: [],
      technologies: [],
      employmentHistories: []
    };

    return forkJoin([technologies, educations, employmentHistories]).pipe(
      map((data) => {
        response.educations = data[1];
        response.technologies = data[0];
        response.employmentHistories = data[2];
        return response;
      })
    );
  }
}
