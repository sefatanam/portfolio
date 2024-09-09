import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@interfaces/Article';
import { DeveloperInformation } from '@interfaces/DeveloperInformation';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IntroComponent } from '../components/intro.component';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, IntroComponent]
})
export class HomeComponent implements OnInit {
  words = ['Frontend Developer ', 'Angular Developer', 'Typescript', 'Go', 'Nice to meet you!'];

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
