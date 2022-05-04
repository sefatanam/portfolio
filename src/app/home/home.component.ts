import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Article } from '@interfaces/Article';
import { DeveloperInformation } from '@interfaces/DeveloperInformation';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  developerInfo!: Observable<DeveloperInformation>;
  articles!: Observable<Article[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.developerInfo = this.httpClient.get<DeveloperInformation>('home.json');
    this.articles = this.httpClient.get<Article[]>('articles.json');
  }
}
