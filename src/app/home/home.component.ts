import { Article } from '@interfaces/Article';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperInformation } from '@interfaces/DeveloperInformation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

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
  developerInfo!: Observable<DeveloperInformation>;
  articles!: Observable<Article[]>;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.developerInfo = this.httpClient.get<DeveloperInformation>('home.json');
    this.articles = this.httpClient.get<Article[]>('articles.json');
  }
}
