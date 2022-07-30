import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Project } from '@interfaces/Project';
import { forkJoin, map, Observable } from 'rxjs';

interface ProjectData {
  projects: Project[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolver implements Resolve<ProjectData> {
  constructor(private httpClient: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProjectData> {
    const projects = this.httpClient.get<Project[]>('projects.json');
    const response: ProjectData = { projects: [] };
    return forkJoin([projects]).pipe(
      map((data) => {
        response.projects = data[0];
        return response;
      })
    );
  }
}
