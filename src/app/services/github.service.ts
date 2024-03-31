import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  async downloadFromGitHub() {
    try {
      const { repoUrl, fileName, filePath } = environment.resume;
      // Construct the raw GitHub URL
      const rawUrl = `${repoUrl}/raw/main/${filePath}`;

      // Fetch file content
      const response = await fetch(rawUrl, { mode: 'no-cors' });
      const fileContent = await response.blob();

      // Create a Blob from file content
      const blob = new Blob([fileContent], {
        type: 'application/octet-stream'
      });

      // Generate object URL
      const url = URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      // Trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('Error downloading resume.');
      console.error('Error downloading resume.', error);
    }
  }

  /* // Example usage:
  const repoUrl = 'https://github.com/username/repo'; // Replace with your GitHub repository URL
  const filePath = 'path/to/file.txt'; // Path to the file in the repository
  const fileName = 'file.txt'; // Name for the downloaded file
  downloadFromGitHub(repoUrl, filePath, fileName); */
}
