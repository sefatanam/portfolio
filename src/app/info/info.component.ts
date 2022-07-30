import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Education } from '@interfaces/Education';
import { EmploymentHistory } from '@interfaces/EmploymentHistory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '@interfaces/Technology';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActivatedRoute } from '@angular/router';

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
  technologies!: Technology[];
  employmentHistories!: EmploymentHistory[];
  educations!: Education[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      const { technologies, educations, employmentHistories } = data;
      this.technologies = technologies;
      this.educations = educations;
      this.employmentHistories = employmentHistories;
    });
  }
}
