import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education } from '@interfaces/Education';
import { EmploymentHistory } from '@interfaces/EmploymentHistory';
import { Technology } from '@interfaces/Technology';
import { UntilDestroy } from '@ngneat/until-destroy';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';

@UntilDestroy()
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  standalone: true,
  imports: [CommonModule, NgxBorderBeamComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {
  technologies!: Technology[];
  employmentHistories!: EmploymentHistory[];
  educations!: Education[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      const { technologies, educations, employmentHistories } = data;
      this.technologies = technologies;
      this.educations = educations;
      this.employmentHistories = employmentHistories;
    });
  }
}
