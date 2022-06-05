import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from '@interfaces/Project';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  projects!: Observable<Readonly<Project[]>>;
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.projects = this.httpClient.get<Project[]>('projects.json');
  }
}
