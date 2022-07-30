import { Article } from '@interfaces/Article';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperInformation } from '@interfaces/DeveloperInformation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActivatedRoute } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  developerInfo!: DeveloperInformation;
  articles!: Article[];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      const { developerInfo, articles } = data;
      this.articles = articles;
      this.developerInfo = developerInfo;
    });
  }
}
