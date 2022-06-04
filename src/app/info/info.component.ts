import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Education } from '@interfaces/Education';
import { EmploymentHistory } from '@interfaces/EmploymentHistory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '@interfaces/Technology';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {
  technologies!: Observable<Technology[]>;
  employmentHistories!: Observable<EmploymentHistory[]>;
  educations!: Observable<Education[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.technologies = this.httpClient.get<Technology[]>('technologies.json');
    this.educations = this.httpClient.get<Education[]>('educations.json');
    this.employmentHistories = this.httpClient.get<EmploymentHistory[]>(
      'employmentHistory.json'
    );
  }
}
