import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '@interfaces/Technology';
import { EmploymentHistory } from '@interfaces/EmploymentHistory';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  technologies!: Observable<Technology[]>;
  employmentHistories!: Observable<EmploymentHistory[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.technologies = this.httpClient.get<Technology[]>('technologies.json');
    this.employmentHistories = this.httpClient.get<EmploymentHistory[]>(
      'employmentHistory.json'
    );
  }
}
