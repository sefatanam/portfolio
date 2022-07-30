import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Article } from '@interfaces/Article';
import { DeveloperInformation } from '@interfaces/DeveloperInformation';
import { forkJoin, map, Observable, of } from 'rxjs';
interface HomeData {
  developerInfo: DeveloperInformation | null;
  articles: Article[];
}

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<HomeData> {
  constructor(private httpClient: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<HomeData> {
    const res1 = this.httpClient.get<DeveloperInformation>('home.json');
    const res2 = this.httpClient.get<Article[]>('articles.json');
    const response: HomeData = { articles: [], developerInfo: null };
    return forkJoin([res1, res2]).pipe(
      map((data) => {
        response.articles = data[1];
        response.developerInfo = data[0];
        return response;
      })
    );
  }
}
