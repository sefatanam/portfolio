import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  httpClient = inject(HttpClient);
  donwloadResume() {
    this.httpClient
      .get(environment.resume.githubPdfUrl, {
        responseType: 'blob' as 'json',
        params: { skipInterceptor: true }
      })
      .subscribe((response: any) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = environment.resume.title;
        downloadLink.click();
      });
  }
}
