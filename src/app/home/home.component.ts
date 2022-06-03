import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Article } from '@interfaces/Article';
import { DeveloperInformation } from '@interfaces/DeveloperInformation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class HomeComponent implements OnInit {
  developerInfo!: Observable<DeveloperInformation>;
  articles!: Observable<Article[]>;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.developerInfo = this.httpClient.get<DeveloperInformation>(
      environment.api_url + 'home.json'
    );
    this.articles = this.httpClient.get<Article[]>(
      environment.api_url + 'articles.json'
    );
  }
}
