import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  async downloadResumeFromGithub() {
    try {
      // Fetch the PDF content from GitHub
      const response = await fetch(environment.resume.githubPdfUrl, {
        mode: 'no-cors'
      });
      const pdfBlob = await response.blob();

      // Create a blob URL from the PDF content
      const blobUrl = URL.createObjectURL(pdfBlob);

      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = environment.resume.title;

      // Trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      alert('Error downloading PDF');
      console.error('Error downloading PDF:', error);
    }
  }
}
