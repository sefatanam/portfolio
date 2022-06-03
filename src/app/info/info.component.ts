import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '@interfaces/Technology';
import { EmploymentHistory } from '@interfaces/EmploymentHistory';
import { Education } from '@interfaces/Education';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class InfoComponent implements OnInit {
  technologies!: Observable<Technology[]>;
  employmentHistories!: Observable<EmploymentHistory[]>;
  educations!: Observable<Education[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.technologies = this.httpClient.get<Technology[]>(
      environment.api_url + 'technologies.json'
    );
    this.educations = this.httpClient.get<Education[]>(
      environment.api_url + 'educations.json'
    );
    this.employmentHistories = this.httpClient.get<EmploymentHistory[]>(
      environment.api_url + 'employmentHistory.json'
    );
  }
}
